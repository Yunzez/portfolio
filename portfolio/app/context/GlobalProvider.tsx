import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  color: string;
  setColor: (color: string) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
  color: "",
  setColor: () => {},
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [color, setColor] = useState("red");

  return (
    <GlobalContext.Provider value={{ color, setColor }}>
      {children}
    </GlobalContext.Provider>
  );
};
