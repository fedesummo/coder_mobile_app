import { FlatList, Text, View, StyleSheet } from "react-native";
import { ScreenContainer, Header } from "~components";
import { useAppContext } from "~context/App";
import places from "~constants/places";
import colors from "~constants/colors";

const Discover = ({ navigation }) => {
  const { username } = useAppContext();

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <ScreenContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={places}
        ListHeaderComponent={<Header heading="Descubrí" subHeading="¿Ya conocías estos lugares?"/>}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </ScreenContainer>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.loader,
    width: "47%",
    height: 220,
    marginBottom: 15,
    justifyContent: "flex-end",
    borderRadius: 25,
  },
  title: {
    width: "80%",
    marginLeft: 15,
    marginBottom: 8,
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
