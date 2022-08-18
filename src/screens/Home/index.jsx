import EmptyTopContainer from "~components/EmptyTopContainer";
import ScreenContainer from "~components/ScreenContainer";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import Section from "./components/Section";
import screens from "~constants/screens";
// import styles from "./styles";

const Home = ({ navigation }) => {
  const test = ["Descubrí", "Eventos", "Beneficios", "Novedades", "Ayuda"];

  const renderSectionItems = ({ item }) => <Section data={item} />;

  return (
    <ScreenContainer>
      <EmptyTopContainer />

      {/* Sections */}
      <View>
        <Text style={styles.title}>Secciones</Text>
        <FlatList horizontal data={test} renderItem={renderSectionItems} />
      </View>

      {/* Most Visited */}
      <View>
        <Text style={styles.title}>Los más visitados</Text>
        <FlatList horizontal data={test} />
      </View>
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionsScrollView: {
    // borderWidth: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
});
