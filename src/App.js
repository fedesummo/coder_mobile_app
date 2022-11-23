import "react-native-gesture-handler";
import AppNavigator from "~navigation";
import { Provider } from "react-redux";
import { AppLoader } from "~components";
import store from "~store";

const App = () => {
  return (
    <Provider store={store}>
      <AppLoader>
        <AppNavigator />
      </AppLoader>
    </Provider>
  );
};

export default App;
