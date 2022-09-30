import "react-native-gesture-handler";
import AppNavigator from "~navigation";
import { Provider } from "react-redux";
import { SessionHandler } from "~components";
import { initAuthDb } from "~db/auth";
import store from "~store";

(async () => {
  try {
    await initAuthDb();
  } catch (error) {
    console.log(error);
  }
})();

const App = () => {
  return (
    <Provider store={store}>
      <SessionHandler>
        <AppNavigator />
      </SessionHandler>
    </Provider>
  );
};

export default App;
