import { Text, View, StyleSheet, Image } from "react-native";
import menuIcon from "./assets/menu-icon.png";
import fontSizes from "~constants/fontSizes";

const Header = (props) => {
  return (
    <View style={styles.topContainer}>
      {/* Title */}
      <Text style={styles.title}>{props.title}</Text>
      {/* Icon */}
      <View style={styles.iconContainer}>
        <Image source={menuIcon} style={styles.icon} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 75,
    height: 75,
  },
  icon: {
    width: "95%",
    height: undefined,
    aspectRatio: 1.1,
  },
  title: {
    fontSize: fontSizes.title,
    marginLeft: 13,
  },
});
