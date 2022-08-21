import { ScrollView, View } from "react-native";
import styles from "./styles";

const ScreenContainer = ({ children, style }) => {
  return (
    <ScrollView style={{...styles.container, ...style}} showsVerticalScrollIndicator={false}>
      <View style={styles.topEmptyContainer}></View>
      {children}
    </ScrollView>
  );
};

export default ScreenContainer;
