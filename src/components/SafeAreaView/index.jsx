import { SafeAreaView } from "react-native";
import styles from "./styles";

const CustomSafeAreaView = ({ children, style }) => {
  return (
    <SafeAreaView style={{ ...styles.cnt, ...style }}>{children}</SafeAreaView>
  );
};

export default CustomSafeAreaView;
