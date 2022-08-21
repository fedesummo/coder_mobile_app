import { StyleSheet } from "react-native";
import { colors } from "~constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.loader,
    borderRadius: 20,
  },
  heading: {
    width: "80%",
    color: "white",
    marginLeft: 15,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "500",
  },
});

export default styles;
