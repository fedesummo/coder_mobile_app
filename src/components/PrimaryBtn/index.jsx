import { Pressable, Text } from "react-native";
import styles from "./styles"

const PrimaryBtn = ({ text, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryBtn;

