import { createContext, useContext } from "react";

type ThemeContextType = {
  themeMode: string;
  lightTheme: () => void;
  darkTheme: () => void;
};

// 1- creating context and initilizing its default status
//the methods are just referense and we can access them though value passed in wrapper
const themeContext = createContext<ThemeContextType>({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export default themeContext;

//we can also make provider like this, then value from create context is passed directly as value to the wrapper as attribute
export const ThemeProvider = themeContext.Provider;

//for easy use
export const useTheme = (): ThemeContextType => {
  return useContext(themeContext);
};
