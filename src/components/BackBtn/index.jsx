import { useNavigation } from "@react-navigation/native";
import backArrowIcon from "./assets/back-arrow.png";
import { Pressable, Image } from "react-native";
import styles from "./styles";

const BackBtn = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Image style={styles.icon} source={backArrowIcon} />
    </Pressable>
  );
};

export default BackBtn;
