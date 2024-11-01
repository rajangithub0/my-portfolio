import { useContext } from "react";
import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
};
//custom hooks
const useTheme = () => useContext(ThemeContext)


export { useTheme, ThemeProvider };