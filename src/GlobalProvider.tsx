import { createContext, createEffect, useContext, Component, JSX, PropsWithChildren } from "solid-js";

// Define your global context
const GlobalContext = createContext<any>();

// Define your global provider component
const GlobalProvider: Component<any> = (props) => {
  // Define your global state or functionality here
  const globalState = "Global State";

  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

// Custom hook to access the global context
export const useGlobalContext = () => useContext(GlobalContext);
