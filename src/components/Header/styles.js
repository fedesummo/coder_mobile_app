import fontSizes from "~constants/fontSizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  heading: {
    fontSize: fontSizes.header,
  },
});

export default styles;