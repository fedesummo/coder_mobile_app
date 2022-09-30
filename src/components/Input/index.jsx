import { TextInput } from "react-native";
import styles from "./styles";

const Input = ({ placeholder, value, onChangeText, keyboardType, style }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={{ ...styles.input, ...style }}
    />
  );
};

export default Input;
