import MostVisitedList from "./components/MostVisitedList";
import SectionHeader from "./components/SectionHeader";
import { ScreenContainer, Header } from "~components";
import SectionsList from "./components/SectionsList";
import { View, StyleSheet } from "react-native";
import NewsList from "./components/NewsList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import styles from "./styles";

const Home = () => {
  const { username } = useSelector(({ user }) => user);

  return (
    <ScreenContainer scroll style={{ paddingLeft: 8 }}>
      <Header
        // heading={`¡Hola, ${username}!`}
        heading={`¡Hola, Federico!`}
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
