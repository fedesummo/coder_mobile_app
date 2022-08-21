import MostVisitedList from "./components/MostVisitedList";
import { View, StyleSheet } from "react-native";
import SectionHeader from "./components/SectionHeader";
import { ScreenContainer, Header } from "~components";
import NewsList from "./components/NewsList";
import SectionsList from "./components/SectionsList";
// import styles from "./styles";

const Home = () => {

  return (
    <ScreenContainer style={{ paddingLeft: 8 }}>
      <Header
        heading="¡Hola, Federico!"
        subHeading="¿Que actividad vas a hacer hoy?"
      />

      {/* Sections */}
      <View style={styles.sectionContainer}>
        <SectionHeader heading="Secciones" />
        <SectionsList />
        
      </View>

      {/* News */}
      <View style={styles.sectionContainer}>
        <SectionHeader heading="Noticias" />
        <NewsList />
      </View>

      {/* Most Visited */}
      <View style={styles.sectionContainer}>
        <SectionHeader heading="Los más visitados" toScreen="Discover" />
        <MostVisitedList />
      </View>

      {/* Events */}
      {/* <View>
        <SectionHeader heading="Próximos eventos"/>
      </View> */}
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 15,
  },
});
