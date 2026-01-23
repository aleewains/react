import { useState } from "react";
import { useUserContext } from "../context/userContextProvider";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const context = useUserContext();

  if (!context) {
    throw new Error("hi");
  }

  const handlesubmit = (e: React.MouseEvent<HTMLButtonElement> | undefined) => {
    if (e) e.preventDefault();
    context.setUser({ username, password });
  };
  return (
    <div className="flex flex-col gap-2 max-w-sm ml-auto mr-auto">
      <h2 className="font-bold text-xl">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-amber-100 p-3 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-amber-100 p-3 rounded"
      />
      <button
        type="submit"
        onClick={handlesubmit}
        className="p-2 bg-amber-200 rounded cursor-pointer"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
