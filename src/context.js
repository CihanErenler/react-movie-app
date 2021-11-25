import React, { useContext } from "react";
import { movies } from "./tempData";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ movies }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
