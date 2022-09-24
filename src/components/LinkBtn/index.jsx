import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const LinkBtn = ({ text, iconName, toScreen, style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{ ...styles.cnt, ...style }}
      onPress={() => navigation.navigate(toScreen)}
    >
      <Text style={styles.text}>{text}</Text>
      <Ionicons name={iconName} size={32} color="white" />
    </Pressable>
  );
};

export default LinkBtn;
