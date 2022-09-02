import { Pressable, Text, StyleSheet } from "react-native";

const SecondaryBtn = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default SecondaryBtn;

const styles = StyleSheet.create({
    
});
