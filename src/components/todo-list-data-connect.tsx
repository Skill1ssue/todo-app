"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { PlusCircle, Trash } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
import { getTodos } from "@/lib/todo-sevice"
import { addTodo } from "@/lib/todo-sevice"
import { deleteTodoItem } from "@/lib/todo-sevice"


interface Todo {
  id: string
  text: string
  completed: boolean
  created_at?: string
}

export default function TodoListDataConnect() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [loading, setLoading] = useState(true)
  const [submitButton, setSubmitButton] = useState(false)
  const [deleteButton, setDeleteButton] = useState(false)

  useEffect(() => {
    async function fetchTodoList() {
      setLoading(true)
      const todosData = await getTodos();

      if (todosData) setTodos(todosData);
      setLoading(false)
    }
    

    fetchTodoList();
  }, [submitButton, deleteButton]);



  const addNewTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim() === "") return

    try {
      // Using Data Connect to insert a new todo
        const addTodoItem = addTodo(newTodo, false)
        addTodoItem.finally(() => setSubmitButton(!submitButton))


        toast.success("Todo added successfully!")

    } catch (error) {
      console.error("Error adding todo:", error)
      toast.error("Failed to add todo. Please try again.")
    }
  }


  const deleteTodo = async (id: string) => {
    try {
      // Using Data Connect to delete a todo
      const deletedTodoItem = deleteTodoItem(id)
        deletedTodoItem.finally(() => setDeleteButton(!deleteButton))

      toast.success("Todo deleted successfully!")
    } catch (error) {
      console.error("Error deleting todo:", error)
      toast.error("Failed to delete todo. Please try again.")
    }
  }

  if (loading) {
    return <div className="flex justify-center py-8">Loading todos...</div>
  }

  return (
    <div className="space-y-4">
      <form onSubmit={addNewTodo} className="flex gap-2">
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1"
        />
        <Button type="submit">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add
        </Button>
      </form>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                todo.completed ? "bg-muted/50" : "bg-card"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id, todo.completed)}
                /> */}
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`font-medium ${todo.completed ? "line-through text-muted-foreground" : ""}`}
                >
                  {todo.text}
                </label>
              </div>
              <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)} aria-label="Delete todo">
                <Trash className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

