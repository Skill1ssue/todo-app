import { listTodo } from './dataconnect-generated/js/default-connector'
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
