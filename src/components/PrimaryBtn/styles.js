import { StyleSheet } from "react-native";
import { fontSizes } from "~constants"

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingVertical: 18,
    backgroundColor: "black",
  },
  text: {
    fontSize: fontSizes.general,
    textAlign: "center",
    color: "white",
  },
});

export default styles;