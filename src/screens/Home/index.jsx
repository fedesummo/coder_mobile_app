import { View, Text, Button } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Press me" onPress={() => navigation.navigate("Discover")} />
    </View>
  );
};

export default Home;
