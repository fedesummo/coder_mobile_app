import { Pressable, Text, StyleSheet } from "react-native";

const SecondaryBtn = ({ text, ...otherProps }) => {
  return (
    <Pressable {...otherProps}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default SecondaryBtn;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
