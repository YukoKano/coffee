import { createContext, useContext } from "react";

export const modeContext = createContext();
export const useLightMode = () => {
  return useContext(modeContext);
};

export const setModeContext = createContext();
export const useSetMode = () => {
  return useContext(setModeContext);
};

export const ModeProvider = ({ children, value, setValue }) => {
  return (
    <modeContext.Provider value={value}>
      <setModeContext.Provider value={setValue}>
        {children}
      </setModeContext.Provider>
    </modeContext.Provider>
  );
};
