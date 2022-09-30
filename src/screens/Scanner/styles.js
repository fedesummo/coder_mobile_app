import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    backgroundColor: "black",
  },
  backBtn: {
    position: "absolute",
    top: 40,
    right: 25,
  },
  flotantMsgCtn: {
    width: "100%",
    alignItems: "center",
    top: 150,
  },
  flotantMsgText: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 10,
    textAlign: "center",
    width: "85%",
    fontSize: 15,
    color: "white",
    borderRadius: 15,
  },
});

export default styles;
