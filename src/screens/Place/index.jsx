import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ImageBackground, Text } from "react-native";
import { useEffect, useCallback, useState } from "react";
import { BackBtn, PrimaryBtn } from "~components";
import { FontAwesome } from "@expo/vector-icons";
import { places } from "~constants";
import styles from "./styles";

const Place = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const [placeData, setPlaceData] = useState(null);

  const getPlaceById = useCallback(
    (id) => {
      const data = places.find((element) => element.id === id);
      setPlaceData(data);
    },
    [places, setPlaceData]
  );

  useEffect(() => getPlaceById(params.id), [params]);

  return placeData ? (
    <ImageBackground
      style={styles.screenCnt}
      imageStyle={styles.bgImg}
      source={{ uri: placeData.img }}
      resizeMode="cover"
    >
      <View style={styles.backBtn}>
        <BackBtn />
      </View>

      <View style={styles.bodyCnt}>
        <Text style={styles.heading}>{placeData.name}</Text>
        <View style={styles.ubicationCnt}>
          <FontAwesome name="map-marker" size={16} color="white" />
          <Text style={styles.ubicationTxt}>{placeData.ubication}</Text>
        </View>
        <Text style={{ ...styles.description, ...styles.bodyGap }}>
          {placeData.description}
        </Text>
        <PrimaryBtn
          transparent
          text="Ver en el mapa"
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </ImageBackground>
  ) : null;
};

export default Place;
