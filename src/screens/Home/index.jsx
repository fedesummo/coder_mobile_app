import { SafeAreaView, Header, Section, LinkBtn } from "~components";
import { useCallback, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaces } from "~store/places/actions";
import { FlatList, View } from "react-native";
import styles from "./styles";

const Home = () => {
  const places = useSelector(({ places }) => places.list);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => !places.length && dispatch(getPlaces()))();
  }, [dispatch]);

  const getPlacesByIds = useCallback(
    (ids) => ids.map((id) => places.find((place) => place.id === id)),
    [places]
  );

  const components = useMemo(() => {
    const mostVisitedPlaces = getPlacesByIds([26, 19, 4, 10]);
    const touristCircuitPlaces = getPlacesByIds([3, 7, 12, 6]);
    const gastronomyPlaces = getPlacesByIds([19, 22, 20, 18]);
    const accommodationPlaces = getPlacesByIds([15, 16, 23, 25]);

    return [
      <View style={styles.btnsCnt}>
        <LinkBtn
          text="QR Escáner"
          iconName="qr-code-outline"
          toScreen="Scanner"
        />
        <View style={styles.btnsGap}></View>
        <LinkBtn text="Mapa" iconName="map" toScreen="Map" />
      </View>,
      <Section
        heading="Los más visitados"
        data={mostVisitedPlaces}
        category={null}
      />,
      <Section
        heading="Circuito turístico"
        data={touristCircuitPlaces}
        category="tourist-circuit"
      />,
      <Section
        heading="Gastronomía"
        data={gastronomyPlaces}
        category="gastronomy"
      />,
      <Section
        heading="Alojamiento"
        data={accommodationPlaces}
        category="accommodation"
      />,
    ];
  }, [getPlacesByIds]);

  const renderItem = useCallback(({ item }) => item, []);

  return places.length ? (
    <SafeAreaView>
      <FlatList
        data={components}
        style={styles.listCnt}
        renderItem={renderItem}
        ListHeaderComponent={<Header heading="¡Bienvenido!" />}
        ItemSeparatorComponent={() => <View style={styles.listGap} />}
      />
    </SafeAreaView>
  ) : null;
};

export default Home;
