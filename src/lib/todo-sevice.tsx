import { createTodo, listTodo, deleteTodo } from './dataconnect-generated/js/default-connector'
import { ListTodoData } from './dataconnect-generated/js/default-connector'



export const getTodos = async (

): Promise<ListTodoData["todos"] | null> => {
  try {
    const response = await listTodo();
    return response.data.todos;
  } catch (error) {
    console.error("Error fetching top movies:", error);
    return null;
  }
};

export const addTodo = async (
  text: string,
  completed: boolean
): Promise<void> => {
  try {
    await createTodo({ text, completed });
  } catch (error) {
    console.error("Error adding Task", error);
    throw error;
  }
};

export const deleteTodoItem = async (
  id: string
): Promise<void> => {
  try {
    await deleteTodo({ id });
  } catch (error) {
    console.error("Error deleting Task", error);
    throw error;
  }
};



