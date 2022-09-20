import { SafeAreaView } from "react-native";
import styles from "./styles";

const CustomSafeAreaView = ({ children }) => {
  return <SafeAreaView style={styles.cnt}>{children}</SafeAreaView>;
};

export default CustomSafeAreaView;
