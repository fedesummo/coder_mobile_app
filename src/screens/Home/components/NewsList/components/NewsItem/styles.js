import { StyleSheet } from "react-native";

const borderRadius = 10;

const styles = StyleSheet.create({
  container: {
    width: 245,
    height: 400,
    position: "relative",
    elevation: 12,
  },
  bgImg: { borderRadius: borderRadius },
  bodyContainer: {
    justifyContent: "center",
    height: "30%",
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderBottomEndRadius: borderRadius,
    borderBottomStartRadius: borderRadius,
    position: "absolute",
    bottom: 0,
  },
  heading: { color: "white", fontWeight: "900", fontSize: 18 },
  content: { color: "white", fontSize: 12 },
});

export default styles;
