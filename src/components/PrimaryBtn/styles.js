import { StyleSheet } from "react-native";
import { fontSizes } from "~constants"

const styles = StyleSheet.create({
  cnt: {
    borderRadius: 30,
    paddingVertical: 18,
  },
  text: {
    fontSize: fontSizes.general,
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
});

export default styles;