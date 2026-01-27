import { useState, useRef, useEffect } from "react";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

interface Todo {
  id: string | number;
  todo: string; // Change 'text' to 'todo' if that's what the component uses
  completed: boolean;
}
interface TodoItemProps {
  todo: Todo;
}

// const editTodo = () => {
//   updateTodo(todo.id, { ...todo, todo: todoMsg });
//   setIsTodoEditable(false);
// };

// const toggle = () => {
//   toggleComplete(todo.id);
// };

function TodoItem({ todo }: TodoItemProps) {
  const [isTodoEditable, setIsTodoEditable] = useState<boolean>(false);
  const [todoMsg, setTodoMsg] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(updateTodo({ ...todo, todo: todoMsg }));
    setIsTodoEditable(false);
  };

  const toggle = () => {
    console.log("toggle");
    dispatch(toggleTodo(todo.id));
  };
  useEffect(() => {
    if (isTodoEditable) {
      inputRef.current?.focus();
    }
  }, [isTodoEditable]);
  return (
    <div
      className={`flex items-center border rounded-xl px-4 py-3 gap-x-3 transition-all duration-300 group shadow-lg backdrop-blur-md ${
        todo.completed
          ? "bg-green-500/10 border-green-500/30 shadow-green-500/5"
          : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
      }`}
    >
      <div className="relative flex items-center justify-center shrink-0">
        <input
          type="checkbox"
          className="peer opacity-0 absolute w-6 h-6 cursor-pointer z-10"
          checked={todo.completed}
          onChange={toggle}
        />
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center
      ${
        todo.completed
          ? "bg-green-500 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          : "bg-white/5 border-white/20 peer-hover:border-white/40"
      }`}
        >
          {/* The Checkmark SVG - Only visible when checked */}
          {todo.completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#172842]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="text"
        className={`w-full outline-none bg-transparent font-medium transition-all duration-200 ${
          isTodoEditable
            ? "border-b border-green-400/50 px-1 text-white"
            : "border-transparent"
        } ${todo.completed ? "line-through text-slate-500" : "text-slate-200"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        onBlur={editTodo}
      />

      {/* Action Buttons */}
      <div className="flex gap-2 shrink-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
        <button
          className={`w-9 h-9 cursor-pointer rounded-lg flex items-center justify-center transition-all active:scale-90 disabled:opacity-20 ${
            isTodoEditable
              ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              {/* <path
                d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                className="rotate-45 origin-center"
              /> */}
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
          )}
        </button>

        <button
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all active:scale-90 shadow-lg shadow-red-500/10 cursor-pointer"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75V4H5a2 2 0 0 0-2 2v.25a.75.75 0 0 0 1.5 0V6c0-.276.224-.5.5-.5h10a.5.5 0 0 1 .5.5v.25a.75.75 0 0 0 1.5 0V6a2 2 0 0 0-2-2h-1v-.25A2.75 2.75 0 0 0 11.25 1h-2.5ZM7.5 4h5v-.25a1.25 1.25 0 0 0-1.25-1.25h-2.5A1.25 1.25 0 0 0 7.5 3.75V4ZM5.75 7.5a.75.75 0 0 1 .75.75v7a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-7a.75.75 0 0 1 1.5 0v7A2 2 0 0 1 13 17H7a2 2 0 0 1-2-2v-7a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
