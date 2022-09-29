import { StyleSheet } from "react-native";
import { commonStyles } from "~styles";

const styles = StyleSheet.create({
  listCnt: {
    ...commonStyles.generalHorizontalPadding,
  },
  btnsCnt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  listGap: {
    marginVertical: 3,
  },
});

export default styles;
