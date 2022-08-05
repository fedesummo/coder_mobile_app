import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {
  const [username, setUsername] = useState();

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {props.children}
    </AppContext.Provider>
  );
};
