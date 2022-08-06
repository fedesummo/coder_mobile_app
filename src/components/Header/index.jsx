import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import menuIcon from "./assets/menu-icon.png";
import fontSizes from "~constants/fontSizes";
import Menu from "~components/Menu";
import { useState } from "react";

const Header = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalState = () =>
    setIsModalVisible((currentModalState) => !currentModalState);

  return (
    <>
      {/* Header */}
      <View style={styles.topContainer}>
        {/* Title */}
        <Text style={styles.title}>{props.title}</Text>
        {/* Icon */}
        <Pressable
          style={styles.iconContainer}
          onPress={changeModalState}
        >
          <Image source={menuIcon} style={styles.icon} />
        </Pressable>
      </View>

      {/* Menu Modal */}
      <Menu visible={isModalVisible} changeModalState={changeModalState}/>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    marginBottom: 10,
    paddingRight: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: fontSizes.title,
  },
  iconContainer: {
    paddingTop: 13,
    alignItems: "flex-end",
    width: 25,
    height: "100%",
  },
  icon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
