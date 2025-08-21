import { createContext, useEffect, useState } from "react";



export const themeContext = createContext()

export const ThemeProvider = ({children}) => {
      const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

    useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

    function toggleTheme () {
        return setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    function resetTheme(){
        return setTheme('light')
    }

    const themeData = {
        theme, 
        toggleTheme,
        // resetTheme
    }

    return <themeContext.Provider value = {themeData}>
{children}
    </themeContext.Provider>
}