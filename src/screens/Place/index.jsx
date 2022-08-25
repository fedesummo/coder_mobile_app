import { View, ImageBackground, ScrollView, Text } from "react-native";
import { useEffect, useCallback, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { BackBtn, PrimaryBtn } from "~components";
import { places } from "~constants";
import styles from "./styles";

const Place = () => {
  const { params } = useRoute();

  const [placeData, setPlaceData] = useState(null);

  const getPlaceById = useCallback(
    (id) => {
      const data = places.find((element) => element.id === id);
      setPlaceData(data);
    },
    [places, setPlaceData]
  );

  useEffect(() => getPlaceById(params.id), [params]);
  // useEffect(() => console.log(placeData), [placeData]);

  return placeData ? (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={styles.imgContainer}
        imageStyle={{ height: "100%" }}
        source={placeData.img}
        resizeMode="cover"
      >
        <View style={styles.backBtn}>
          <BackBtn />
        </View>
      </ImageBackground>
      <ScrollView style={styles.bodyContainer}>
        <Text style={styles.heading}>{placeData.name}</Text>
        <Text style={styles.gralText}>{placeData.description}</Text>
        <View style={styles.bodyBtn}>
          <PrimaryBtn text="Marcar como visitado" />
        </View>
      </ScrollView>
    </View>
  ) : (
    <></>
  );
};

// añadir loader
export default Place;
