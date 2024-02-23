import { createContext, useContext } from "react";

export const modeContext = createContext();
export const useLightMode = () => {
  return useContext(modeContext);
};
export const ModeProvider = ({ children, value }) => {
  return <modeContext.Provider value={value}>{children}</modeContext.Provider>;
};

export const setModeContext = createContext();
export const useSetMode = () => {
  return useContext(setModeContext);
};
export const SetModeProvider = ({ children, value }) => {
  return (
    <setModeContext.Provider value={value}>{children}</setModeContext.Provider>
  );
};
