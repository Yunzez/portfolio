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

interface GlobalContextProps {
  color: string;
  setColor: (color: string) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialRender: boolean;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  theme: any;
}

export const GlobalContext = createContext<GlobalContextProps>({
  color: "",
  setColor: () => {},
  isOpen: false,
  setIsOpen: () => {},
  initialRender: true,
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
  const [initialRender, setInitialRender] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  // const theme = getTheme(darkMode)
  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme);
    console.log("run");
    const metaTag = document.querySelector('meta[name="color-scheme"]');
    if (metaTag) {
      metaTag.setAttribute("content", darkMode ? "dark" : "light");
    }
  }, [darkMode]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    const metaTag = document.querySelector('meta[name="color-scheme"]');
    console.log(metaTag)
    // After the initial render, set the initialRender flag to false
    setInitialRender(false);
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
        initialRender,
        darkMode,
        setDarkMode,
        theme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
