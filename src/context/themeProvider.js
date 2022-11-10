import { useState, useContext, useCallback, createContext } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const localTheme = window.localStorage.getItem('theme') || 'light';
  const [themeMode, setThemeMode] = useState(localTheme);
  const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>
        { children }
      </StyledProvider>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (themeMode === "light") {
      setThemeMode("dark");
      window.localStorage.setItem('theme', "dark")
    } else {
      setThemeMode("light");
      window.localStorage.setItem('theme', "light")
    };
  }, [themeMode]);
  return [ themeMode, toggleTheme ];
}

export { ThemeProvider, useTheme };