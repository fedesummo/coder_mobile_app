import { SafeAreaView, Header, ImgBtn } from "~components";
import MasonryList from "@react-native-seoul/masonry-list";
import { useRoute } from "@react-navigation/native";
import places from "~constants/places";
import { useCallback } from "react";
import styles from "./styles";
import { useEffect } from "react";
import { useState } from "react";

const Discover = () => {
  const { params } = useRoute();

  const [placesList, setPlacesList] = useState([]);

  const getPlacesByCategory = useCallback(
    (category) => {
      if (category) {
        const filteredPlaces = places.filter(
          (element) => element.category === category
        );
        setPlacesList(filteredPlaces);
      } else {
        setPlacesList(places);
      }
    },
    [places]
  );

  useEffect(() => getPlacesByCategory(params?.category), [params]);

  const getItemHeight = useCallback(
    (index) => {
      if (index === 0 || index === places.length - 1) {
        return 230;
      } else {
        return 260;
      }
    },
    [places]
  );

  const renderItem = useCallback(
    ({ item, i }) => (
      <ImgBtn
        data={item}
        style={{ ...styles.item, height: getItemHeight(i) }}
      />
    ),
    [styles]
  );

  return (
    <SafeAreaView>
      <MasonryList
        ListHeaderComponent={<Header heading="Descubrí" />}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        style={styles.listCnt}
        numColumns={2}
        data={placesList}
      />
    </SafeAreaView>
  );
};

export default Discover;
