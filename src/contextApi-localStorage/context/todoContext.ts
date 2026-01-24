import { createContext, useContext } from "react";
export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: Todo) => void;
  toggleComplete: (id: number) => void;
}
export const todoContext = createContext<TodoContextType>({
  todos: [
    {
      id: Date.now(),
      todo: "learn js",
      completed: false,
    },
  ],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
});

export const useTodo = () => {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export const TodoContextProvider = todoContext.Provider;
