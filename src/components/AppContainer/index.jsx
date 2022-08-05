import { View, StyleSheet } from "react-native";
import colors from "~constants/colors"

const AppContainer = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 40,
  },
});
