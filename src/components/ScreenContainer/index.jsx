import { Text, View } from "react-native";
import styles from "./styles";

const ScreenContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topEmptyContainer}></View>
      {children}
    </View>
  );
};

export default ScreenContainer;
