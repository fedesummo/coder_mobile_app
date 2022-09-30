import { SignIn, SignUp, Home, Discover, Place, Scanner, Map } from "~screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const user_id = useSelector(({ auth }) => auth.user_id);

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
        backBehavior="history"
        screenOptions={{ headerShown: false }}
      >
        {!user_id ? (
          <>
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
          </>
        ) : (
          <>
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
            <Drawer.Screen
              name="Place"
              component={Place}
              options={hideOnDrawer}
            />
            <Drawer.Screen
              name="Scanner"
              component={Scanner}
              options={{ title: "QR Escáner" }}
            />
            <Drawer.Screen
              name="Map"
              component={Map}
              options={{ title: "Mapa" }}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
