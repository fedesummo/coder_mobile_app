import MasonryList from "@react-native-seoul/masonry-list";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { useCallback } from "react";
import ImgBtn from "../ImgBtn";
import styles from "./styles";

const Section = ({ heading, data, style, category }) => {
  const navigation = useNavigation();

  const getItemHeigth = useCallback((index) => {
    if (index === 0 || index === 3) {
      return 260;
    } else {
      return 230;
    }
  }, []);

  const renderItem = useCallback(
    ({ item, i }) => {
      return (
        <ImgBtn
          data={item}
          style={{
            marginVertical: 7,
            paddingHorizontal: 5,
            height: getItemHeigth(i),
          }}
        />
      );
    },
    [getItemHeigth]
  );

  return (
    <View style={{ ...style, flex: 1 }}>
      <View style={styles.headerCnt}>
        <Text style={styles.heading}>{heading}</Text>
        <Pressable
          onPress={() => navigation.navigate("Discover", { category })}
        >
          <Text style={styles.link}>Ver todos {">"}</Text>
        </Pressable>
      </View>
      <MasonryList
        data={data}
        numColumns={2}
        style={styles.listCnt}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Section;
