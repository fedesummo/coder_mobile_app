import { StyleSheet } from "react-native";
import { colors } from "~constants";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    position: "relative",
  },
  imgContainer: {
    height: "65%",
    position: "relative",
    backgroundColor: colors.loader,
  },
  bodyContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: colors.background,
  },
  backBtn: {
    position: "absolute",
    top: 40,
    right: 25,
    // left: 25,
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
  },
  gralText: {
    fontSize: 16,
  },
  bodyBtn: {
    marginTop: 15,
  },
});

export default styles;
