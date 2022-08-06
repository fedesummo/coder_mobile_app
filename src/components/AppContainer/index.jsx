import { View, StyleSheet } from "react-native";
import { useAppContext } from "~context/App";
import colors from "~constants/colors";
import Welcome from "~screens/Welcome";
import Home from "~screens/Home";

const AppContainer = () => {
  const { username } = useAppContext();
  return (
    <View style={styles.container}>{username ? <Home /> : <Welcome />}</View>
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
