import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Home, Menu, Discover, Rewards } from "~screens/index";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Welcome"
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
