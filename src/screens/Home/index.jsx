import { SafeAreaView, Header, Section, LinkBtn } from "~components";
import { useCallback, useMemo } from "react";
import { FlatList, View } from "react-native";
import { places } from "~constants";
import styles from "./styles";

const test = () => <View style={{ height: 50 }}></View>;

const Home = () => {
  const getMostVisitedPlaces = useCallback(() => {
    const randomPlaces = [];
    for (let i = 0; i < 4; i++) {
      randomPlaces.push(places[Math.floor(Math.random() * places.length)]);
    }
    return randomPlaces;
  }, [places]);

  const components = useMemo(
    () => [
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
        data={getMostVisitedPlaces()}
        category={null}
      />,
      <Section
        heading="Circuito turístico"
        data={getMostVisitedPlaces()}
        category="tourist-circuit"
      />,
      <Section
        heading="Gastronomía"
        data={getMostVisitedPlaces()}
        category="gastronomy"
      />,
      <Section
        heading="Alojamiento"
        data={getMostVisitedPlaces()}
        category="accommodation"
      />,
    ],
    []
  );

  const renderItem = useCallback(({ item }) => item, []);

  return (
    <SafeAreaView>
      <FlatList
        data={components}
        renderItem={renderItem}
        style={styles.listCnt}
        ListHeaderComponent={<Header heading="¡Bienvenido!" />}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </SafeAreaView>
  );
};

export default Home;
