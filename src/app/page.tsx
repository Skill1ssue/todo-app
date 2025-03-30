import TodoListDataConnect from "@/components/todo-list-data-connect"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List with Data Connect</h1>
        <p className="text-center text-muted-foreground mb-6">
          Developed by <strong>Berling Guzman Frias</strong> for Pereyra Dev
        </p>
        <TodoListDataConnect />
      </div>
    </main>
  )
}

