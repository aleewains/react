import { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      id: Date.now(),
      todo,
      completed: false,
    });
    setTodo("");
  };
  return (
    <form
      className="flex group shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden"
      onSubmit={add}
    >
      <input
        value={todo}
        type="text"
        placeholder="What needs to be done?"
        className="w-full bg-slate-50 border-2 border-transparent border-r-0 rounded-l-lg px-4 py-2.5 outline-none focus:bg-white focus:border-green-500 transition-all duration-200 placeholder:text-slate-400 text-slate-700"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 cursor-pointer active:scale-95 text-white font-semibold px-6 py-2.5 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 border-r-0 rounded-r-lg"
      >
        <span>Add</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </form>
  );
}

export default TodoForm;
