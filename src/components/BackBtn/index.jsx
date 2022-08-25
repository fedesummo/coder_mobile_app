import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable, Image } from "react-native";
import backArrowIcon from "./assets/back-arrow.png";

const BackBtn = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Image style={styles.icon} source={backArrowIcon} />
    </Pressable>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    width: 40,
    padding: 10,
    borderRadius: 20,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  icon: { width: "100%", height: undefined, aspectRatio: 1 },
});
