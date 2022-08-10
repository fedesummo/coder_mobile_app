import { View, Text, Image, StyleSheet } from "react-native";
import colors from "~constants/colors";
import fontSizes from "~constants/fontSizes";

import checkboxIcon from "../assets/checkbox.png";
import padlockIcon from "../assets/padlock.png";

const Reward = (props) => {
  const { name, description, requiredPoints } = props.data;

  return (

    <View style={styles.container}>
      {/* Body */}
      <View style={styles.bodyContainer}>
        {/* Img */}
        <View></View>

        {/* Text */}
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <Image source={null} />

        {/* Points */}
        {/* <View>
          <Text>{requiredPoints}</Text>
        </View> */}
      </View>

      {/* Indicator */}
      <View style={styles.iconContainer}>
        <Image source={checkboxIcon} style={styles.icon}/>
      </View>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingBottom: 20,
    marginBottom: 15,
  },
  bodyContainer: {
    flexDirection: "row",
    backgroundColor: colors.loader,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 20
  },
  description: {
    fontSize: fontSizes.general
  },
  iconContainer: {
    backgroundColor: colors.loader,
    borderRadius: 10,
    padding: 3,
    width: "13%",
    position: "absolute",
    bottom: 0,
    right: 20,
  },
  icon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    // backgroundColor: colors.loader,
  }
});
