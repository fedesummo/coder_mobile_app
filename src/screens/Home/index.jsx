import SectionHeader from "./components/SectionHeader";
import { SafeAreaView, Text, Header, Section } from "~components";
import { FlatList, ScrollView } from "react-native";
import { useCallback, useEffect, useMemo } from "react";
import styles from "./styles";
import { places } from "~constants";

const Home = () => {
  const getMostVisitedPlaces = useCallback(() => {
    const randomPlaces = [];
    for (let i = 0; i < 4; i++) {
      randomPlaces.push(places[Math.floor(Math.random() * places.length)]);
    }
    return randomPlaces;
  }, [places]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Section heading="Los más visitados" data={getMostVisitedPlaces()} />

        
      </ScrollView>
    </SafeAreaView>

    // <ScreenContainer scroll style={{ paddingLeft: 8 }}>
    //   <Header heading="¡Bienvenido!"/>

    //   {/* Sections */}
    //   <View style={styles.sectionContainer}>
    //     <SectionHeader heading="Secciones" />
    //     <SectionsList />
    //   </View>

    //   {/* News */}
    //   <View style={styles.sectionContainer}>
    //     <SectionHeader heading="Noticias" />
    //     <NewsList />
    //   </View>

    //   {/* Most Visited */}
    //   <View style={styles.sectionContainer}>
    //     <SectionHeader heading="Los más visitados" toScreen="Discover" />
    //     <MostVisitedList />
    //   </View>

    //   {/* Events */}
    //   {/* <View>
    //     <SectionHeader heading="Próximos eventos"/>
    //   </View> */}
    // </ScreenContainer>
  );
};

export default Home;
