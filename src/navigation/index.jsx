import {
  Welcome,
  SignUp,
  Home,
  Menu,
  Discover,
  Place,
  Rewards,
} from "~screens/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Welcome"
        initialRouteName="SignUp"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Place" component={Place} />
        <Stack.Screen name="Rewards" component={Rewards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
