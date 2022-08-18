import AppContainer from "~components/AppContainer";
import { AppContextProvider } from "~context/App";
import AppNavigator from "~navigation";

const App = () => {
  return (
    <AppContextProvider>
      <AppNavigator />
    </AppContextProvider>
  );
};

export default App;
