import { validateLocalResfreshToken } from "~store/auth/actions";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const AppLoader = ({ children }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      await dispatch(validateLocalResfreshToken());
      setAppIsReady(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return children;
};

export default AppLoader;
