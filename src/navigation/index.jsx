import {
  SignIn,
  SignUp,
  Home,
  Discover,
  Place,
  Scanner,
  Rewards,
  SignOut,
} from "~screens/index";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useMemo } from "react";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const hideOnDrawer = useMemo(
    () => ({
      drawerItemStyle: {
        display: "none",
      },
    }),
    []
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="SignIn"
          component={SignIn}
          options={hideOnDrawer}
        />
        <Drawer.Screen
          name="SignUp"
          component={SignUp}
          options={hideOnDrawer}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: "Inicio" }}
        />
        <Drawer.Screen
          name="Discover"
          component={Discover}
          options={{ title: "Descubrí" }}
        />
        <Drawer.Screen name="Place" component={Place} options={hideOnDrawer} />
        <Drawer.Screen
          name="Scanner"
          component={Scanner}
          options={{ title: "QR Escáner" }}
        />
        <Drawer.Screen
          name="Rewards"
          component={Rewards}
          options={{ title: "Beneficios" }}
        />
        <Drawer.Screen
          name="SignOut"
          component={SignOut}
          options={{ title: "Cerrar sesión" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
