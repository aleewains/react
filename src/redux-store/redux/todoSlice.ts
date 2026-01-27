import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define exactly what a single Todo looks like
type Todo = {
  id: string;
  date: number;
  todo: string;
  completed: boolean;
};

// 2. Define the shape of your slice's state
interface TodoState {
  todos: Todo[];
}

const loadState = (): Todo[] => {
  // 1. Added explicit return type
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    try {
      const todos: Todo[] = JSON.parse(storedTodos);
      return todos;
    } catch (error) {
      console.error("Failed to parse todos", error);
      return []; // 2. Return empty array if JSON is corrupted
    }
  }

  return []; // 3. Return empty array if localStorage is empty
};

const initialState: TodoState = {
  todos: loadState(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        date: Date.now(),
        todo: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    updateTodo: (state, action) => {
      console.log("updated slice");
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo,
      );
      console.log("up 2");
    },
    toggleTodo: (state, action) => {
      console.log("toggle slice");
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
