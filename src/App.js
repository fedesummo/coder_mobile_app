import "react-native-gesture-handler";
import AppNavigator from "~navigation";
import { Provider } from "react-redux";
import { SessionHandler } from "~components";
import { initAuthDb, getAllRowsFromAuthDb, dropAuthDb } from "~db/auth";
import store from "~store";

(async () => {
  try {
    await initAuthDb();
    console.log("Auth database: succesfully created");

    const res = await getAllRowsFromAuthDb();
    console.log(res.rows._array);
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
