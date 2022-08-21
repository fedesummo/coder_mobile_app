import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const NewsItem = ({ item }) => {
  return (
    <ImageBackground
      source={item.img}
      style={styles.container}
      imageStyle={styles.bgImg}
    >
      {/* Text Container */}
      <View style={styles.bodyContainer}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </ImageBackground>
  );
};

export default NewsItem;
