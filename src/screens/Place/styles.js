import { StyleSheet } from "react-native";
import { commonStyles } from "~styles";

const styles = StyleSheet.create({
  screenCnt: {
    flex: 1,
    position: "relative",
    backgroundColor: "black",
  },
  bgImg: {
    opacity: 0.3,
  },
  backBtn: { ...commonStyles.backBtn },
  bodyCnt: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  bodyGap: {
    marginVertical: 20,
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeight: "600",
  },
  ubicationCnt: {
    flexDirection: "row",
    alignItems: "center",
  },
  ubicationTxt: {
    marginLeft: 8,
    color: "white",
    fontWeight: "500",
  },
  description: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
