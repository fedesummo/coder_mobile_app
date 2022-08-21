import { View, Text } from "react-native";
import styles from "./styles";

const Container = ({ heading }) => {
  return (
    <View style={styles.container}>
      {heading && <Text style={styles.heading}>{heading}</Text>}
    </View>
  );
};

export default Container;
