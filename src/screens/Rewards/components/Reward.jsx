import { View, Text, Image, StyleSheet } from "react-native";
import colors from "~constants/colors";
import fontSizes from "~constants/fontSizes";

// corregir nombre de los icons
import Points from "~components/Points";
import checkboxIcon from "../assets/checked.png";
// import checkboxIcon from "../assets/unchecked.png";
import padlockIcon from "../assets/padlock.png";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const Reward = (props) => {
  const { name, description, requiredPoints } = props.data;
  const { points: userPoints } = useSelector(({user}) => user)
  return (
    <View style={styles.container}>
      {/* Body */}
      <View style={styles.bodyContainer}>
        {/* Text */}
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {/* Points */}
        <Points value={requiredPoints} />
      </View>

      {/* Indicator */}
      <View style={styles.iconContainer}>
        <Image
          source={(() =>
            userPoints >= requiredPoints ? checkboxIcon : padlockIcon)()}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    paddingBottom: 20,
    marginBottom: 15,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.loader,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 20,
    alignSelf: "flex-start",
  },
  description: {
    width: 260,
    fontSize: fontSizes.general,
    alignSelf: "flex-start",
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
  },
});
