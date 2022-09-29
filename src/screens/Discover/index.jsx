import MasonryList from "@react-native-seoul/masonry-list";
import { SafeAreaView, Header, ImgBtn } from "~components";
import { useState, useCallback, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import styles from "./styles";

const Discover = () => {
  const { params } = useRoute();

  const places = useSelector(({ places }) => places.list);

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

  return places.length ? (
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
  ) : (
    <Text>Cargando...</Text>
  );
};

export default Discover;
