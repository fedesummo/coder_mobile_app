import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

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

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 30,
    textAlign: "center",
    // fontSize: fontSizes.general,
    paddingVertical: 15,
    borderColor: "black",
    // borderColor: colors.black,
  },
});
