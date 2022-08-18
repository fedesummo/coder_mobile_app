import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import arrowIcon from "./assets/arrow-back-icon.png";
import menuIcon from "./assets/menu-icon.png";
import fontSizes from "~constants/fontSizes";
import screens from "~constants/screens";

const Header = ({ screenName }) => {
  const navigation = useNavigation();

  const getScreenTitle = () => {
    if (screenName !== "Welcome") {
      const { title = "" } = screens.find(
        (screen) => screen.name === screenName
      );
      return title;
    } else {
      return "";
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{getScreenTitle()}</Text>
      {/* Icon */}
      {screenName !== "Menu" ? (
        <Pressable
          style={styles.iconContainer}
          onPress={() => {
            navigation.push("Menu");
          }}
        >
          <Image source={menuIcon} style={styles.icon} />
        </Pressable>
      ) : (
        <Pressable
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}
        >
          <Image source={arrowIcon} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginRight: 40,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: fontSizes.title,
  },
  iconContainer: {
    paddingTop: 6,
    width: 33,
    height: "100%",
  },
  icon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
