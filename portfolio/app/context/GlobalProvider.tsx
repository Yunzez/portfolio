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
        theme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
