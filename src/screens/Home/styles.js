import { StyleSheet } from "react-native";
import { commonStyles } from "~styles";

const styles = StyleSheet.create({
  listCnt: {
    ...commonStyles.generalHorizontalPadding,
  },
  btnsCnt: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionsGap: {
    marginBottom: 25,
  },
});

export default styles;
