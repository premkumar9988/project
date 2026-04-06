"use client"
import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme ({theme})
    </button>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <h1>App Component</h1>
      <Toolbar />
    </ThemeProvider>
  );
}