import { Pressable, Text } from "react-native";
import styles from "./styles";

const PrimaryBtn = ({ text, onPress, transparent }) => {
  return (
    <Pressable
      style={
        transparent
          ? { ...styles.cnt, borderWidth: 3, borderColor: "white" }
          : { ...styles.cnt, backgroundColor: "black" }
      }
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryBtn;
