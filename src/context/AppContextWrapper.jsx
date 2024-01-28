import { useReducer } from "react";
import { createContext } from "react";
import { data } from "../utils/data";
import { reducer } from "../context/appReducer";

export const AppContext = createContext();

function AppContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, data);
  const contextValue = { state, dispatch };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppContextWrapper;
