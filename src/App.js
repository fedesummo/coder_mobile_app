import AppContainer from "~components/AppContainer";
import { AppContextProvider } from "~context/App";

const App = () => {
  return (
    <AppContextProvider>
      <AppContainer/>
    </AppContextProvider>
  );
};

export default App;
