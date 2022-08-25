import { StyleSheet } from "react-native";
import colors from "~constants/colors";
import fontSizes from "~constants/fontSizes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: fontSizes.title,
  },
  iconContainer: {
    alignItems: "flex-end",
    paddingTop: 10,
    width: "8%",
    height: "100%",
  },
  icon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  btnsContainer: {
    height: "31%",
    justifyContent: "space-between",
    width: "100%",
  },
  btnContainer: {
    borderRadius: 10,
    paddingVertical: 8,
    backgroundColor: "#EAEAEA",
  },
  btnText: {
    textAlign: "center",
    fontSize: 28,
  },
});

export default styles;
