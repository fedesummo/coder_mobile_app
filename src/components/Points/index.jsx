import { View, Image, Text } from "react-native";
import StarIcon from "./assets/star.png";
import styles from "./styles";

const Points = ({ value }) => {
  return value ? (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={StarIcon} />
      </View>
    </View>
  ) : null;
};

export default Points;
