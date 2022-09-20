import fontSizes from "~constants/fontSizes";
import { StyleSheet } from "react-native";
import { commonStyles } from "~styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    ...commonStyles.generalHorizontalPadding,
  },
  heading: {
    fontSize: fontSizes.header,
  },
});

export default styles;
