import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {
  const [username, setUsername] = useState();
  const [userPoints, setUserPoints] = useState(30);

  return (
    <AppContext.Provider
      value={{ username, setUsername, userPoints, setUserPoints }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
