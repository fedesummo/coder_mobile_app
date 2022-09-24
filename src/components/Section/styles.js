import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerCnt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 3,
  },
  link: {
    fontSize: 13,
    marginRight: 8,
  },
  childCnt: {
    width: "50%",
    // backgroundColor: "gray",
    // height: 200,
    // borderWidth: 1,
    // borderColor: "red",
  },
  tallerCnt: {
    height: 280,
  },
  shorterCnt: {
    height: 230,
  },
});

export default styles;
