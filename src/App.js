import { AppContextProvider } from "~context/App";
import AppNavigator from "~navigation";
import { Provider } from "react-redux";
import store from "~store";

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <AppNavigator />
      </AppContextProvider>
    </Provider>
  );
};

export default App;
