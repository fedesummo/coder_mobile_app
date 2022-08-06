import { Modal, View, Text, Image, StyleSheet, Pressable } from "react-native";
import arrowIcon from "./assets/arrow-back-icon.png";
import fontSizes from "~constants/fontSizes";
import sections from "~constants/sections";
import colors from "~constants/colors";

const Menu = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screenContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Menú</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={props.changeModalState}
          >
            <Image style={styles.icon} source={arrowIcon} />
          </Pressable>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <View style={styles.btnsContainer}>
            {sections.map((element) => (
              <Pressable style={styles.btnContainer} key={element.id}>
                <Text style={styles.btnText}>{element.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Menu;

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 20,
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: fontSizes.title,
  },
  iconContainer: {
    alignItems: "flex-end",
    paddingTop: 10,
    width: "8%",
    height: "100%",
  },
  icon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  btnsContainer: {
    height: "31%",
    justifyContent: "space-between",
    width: "100%",
  },
  btnContainer: {
    borderRadius: 10,
    paddingVertical: 8,
    backgroundColor: "#EAEAEA",
  },
  btnText: {
    textAlign: "center",
    fontSize: 28,
  },
});
