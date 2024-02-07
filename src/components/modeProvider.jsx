import { createContext, useContext } from "react";

export const modeContext = createContext();
export const useMode = () => {
  return useContext(modeContext);
};

export const setModeContext = createContext();
export const useSetMode = () => {
  return useContext(setModeContext);
};
