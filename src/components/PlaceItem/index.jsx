import { Pressable, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const PlaceItem = ({ data, style }) => {
  const navigation = useNavigation();
  const { id } = data;

  return (
    <Pressable
      style={{ ...styles.container, ...style }}
      onPress={() => navigation.navigate("Place", { id })}
    >
      <ImageBackground
        style={styles.imgContainer}
        imageStyle={styles.img}
        source={data.img}
      >
        {data.name && <Text style={styles.heading}>{data.name}</Text>}
      </ImageBackground>
    </Pressable>
  );
};

export default PlaceItem;
