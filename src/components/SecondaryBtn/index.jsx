import { Pressable, Text } from "react-native";
import styles from "./styles";

const SecondaryBtn = ({ text, ...otherProps }) => {
  return (
    <Pressable {...otherProps}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default SecondaryBtn;


