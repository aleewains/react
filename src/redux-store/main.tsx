import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
// Define the shape of a single todo
interface Todo {
  id: string | number;
  date: number;
  todo: string;
  completed: boolean;
}

// Define the shape of your entire Redux state manually
interface ManualRootState {
  todos: Todo[];
}
function TodoRedux() {
  const todos = useSelector((state: ManualRootState) => state.todos);
  const arrangedTodos = [...todos].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    return b.date > a.date ? 1 : -1;
  });
  return (
    <div>
      <div className="bg-[#172842] min-h-screen py-12 px-4 selection:bg-green-500/30">
        <div className="w-full max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <p className="text-slate-400 text-sm font-bold border-2 inline-block p-2 rounded-full border-green-500">
              Redux
            </p>
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
              arrangedTodos.map((todo: any) => (
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
    </div>
  );
}

export default TodoRedux;
