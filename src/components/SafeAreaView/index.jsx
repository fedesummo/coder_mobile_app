import { SafeAreaView } from "react-native";
import styles from "./styles";

const CustomSafeAreaView = ({ children }) => {
  return (
    <SafeAreaView style={styles.cnt}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/> */}
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
