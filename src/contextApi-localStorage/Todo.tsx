import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context/todoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function Todo() {
  type Todo = {
    id: number;
    todo: string;
    completed: boolean;
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };
  const updateTodo = (id: number, updateTodo: Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updateTodo : todo)),
    );
  };
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    // 1. Only parse if storedData exists
    if (storedTodos) {
      const todos: Todo[] = JSON.parse(storedTodos);

      //2. Set your state
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    }
  }, []);

  useEffect(() => {
    //setting storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-12 px-4 selection:bg-green-500/30">
        <div className="w-full max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
              Manage Your <span className="text-green-400">Todos</span>
            </h1>
            <p className="text-slate-400 text-sm">
              Stay organized and focus on what matters.
            </p>
          </div>

          {/* Form Section with subtle backdrop blur */}
          <div className="mb-8 p-1 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl">
            <TodoForm />
          </div>

          {/* List Section */}
          <div className="flex flex-col gap-y-4">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="w-full transform transition-all duration-300 hover:-translate-y-1"
                >
                  <TodoItem todo={todo} />
                </div>
              ))
            ) : (
              <div className="text-center py-10 border-2 border-dashed border-white/10 rounded-xl">
                <p className="text-slate-500">No tasks for today. Relax! ☕</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default Todo;
