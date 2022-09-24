import { Pressable, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import styles from "./styles";

const ImgBtn = ({ data, style }) => {
  const navigation = useNavigation();
  const { id } = data;

  const onPress = useCallback(
    () => navigation.navigate("Place", { id }),
    [navigation, id]
  );

  return (
    <Pressable style={{ ...style }} onPress={onPress}>
      <ImageBackground style={styles.imgCnt} source={{ uri: data.img }}>
        {data.name && <Text style={styles.heading}>{data.name}</Text>}
      </ImageBackground>
    </Pressable>
  );
};

export default ImgBtn;
