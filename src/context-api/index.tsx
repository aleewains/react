import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { ThemeProvider } from "./context/themeContext";
import { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function Index() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <UserContextProvider>
        <div className="max-w-full">
          <h1 className="text-2xl font-bold">Context API</h1>
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
      {
        //the value initial value is destructured here and now we can use them, methods can now we can define here
      }
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-start mt-6 bg-blue-50">
          <div className="w-full mt-6">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Index;
