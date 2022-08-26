import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import fontSizes from "~constants/fontSizes";
import menuIcon from "./assets/menu.png";
import { useEffect } from "react";

const Header = ({ heading, subHeading }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {subHeading && <Text style={styles.heading}>{heading}</Text>}
        <Pressable
          style={styles.iconContainer}
          onPress={() => navigation.push("Menu")}
        >
          <Image source={menuIcon} style={styles.icon} />
        </Pressable>
      </View>
      {subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  topContainer: {
    paddingRight: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: fontSizes.title,
  },
  iconContainer: {
    paddingTop: 13,
    alignItems: "flex-end",
    width: 30,
    height: "100%",
  },
  icon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
