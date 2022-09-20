import { StyleSheet } from "react-native";
import { commonStyles } from "~styles";

const styles = StyleSheet.create({
  listCnt: {
    flex: 1,
    ...commonStyles.generalHorizontalPadding,
  },
  item: {
    marginVertical: 7,
    paddingHorizontal: 5,
  },
});

export default styles;
