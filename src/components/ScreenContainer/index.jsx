import { ScrollView, View } from "react-native";
import styles from "./styles";

const ScreenContainer = ({ children, style, scroll = false }) => {
  return scroll ? (
    <ScrollView
      style={{ ...styles.container, ...style }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topEmptyContainer}></View>
      {children}
    </ScrollView>
  ) : (
    <View
      style={{ ...styles.container, ...style }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topEmptyContainer}></View>
      {children}
    </View>
  );
};

export default ScreenContainer;
