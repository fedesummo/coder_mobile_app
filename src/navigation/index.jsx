import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Home, Menu, Discover, Rewards } from "~screens/index";
import { NavigationContainer } from "@react-navigation/native";
import Header from "~components/Header";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={() => ({
          headerBackVisible: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent"
          },
          headerTitle: ({ children }) => <Header screenName={children} />,
        })}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
