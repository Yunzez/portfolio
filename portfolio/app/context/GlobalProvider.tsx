"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import { theme as lightTheme, darkTheme } from "../theme/theme";
import { Configuration, OpenAIApi } from "openai";
require('dotenv').config()
interface GlobalContextProps {
  color: string;
  setColor: (color: string) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  loaded: boolean;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  theme: any;
}

export const GlobalContext = createContext<GlobalContextProps>({
  color: "",
  setColor: () => {},
  isOpen: false,
  setIsOpen: () => {},
  loaded: true,
  darkMode: false,
  setDarkMode: () => {},
  theme: lightTheme,
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  
  const [color, setColor] = useState("red");
  const [loaded, setLoaded] = useState(false);
  
  const [theme, setTheme] = useState(lightTheme);
  // const theme = getTheme(darkMode)
  const storedDarkModePreference = typeof window !== 'undefined' ? sessionStorage.getItem('darkMode') : null;
  const prefersDarkMode = storedDarkModePreference ? JSON.parse(storedDarkModePreference) : false;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme);
    console.log("run");
    const metaTag = document.querySelector('meta[name="color-scheme"]');
    if (metaTag) {
      metaTag.setAttribute("content", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  useEffect(() => {
    // Whenever darkMode changes, update it in session storage
    sessionStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    const metaTag = document.querySelector('meta[name="color-scheme"]');
    console.log(metaTag)
    const timer = setTimeout(() => {
      setLoaded(true); // set intialRender to false a
    }, 4500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const [isOpen, setIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  return (
    <GlobalContext.Provider
      value={{
        color,
        setColor,
        isOpen,
        setIsOpen,
        loaded,
        darkMode,
        setDarkMode,
        theme
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
