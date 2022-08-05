import { FlatList, Text, View, StyleSheet } from "react-native";
import { useAppContext } from "~context/App";
import Header from "~components/Header";
import places from "~constants/places";
import colors from "~constants/colors";

const Home = () => {
  const { username } = useAppContext();

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <Header title={`¡Hola, ${username}!`} />
      <View style={styles.listContainer}>
        <FlatList
          data={places}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    marginHorizontal: 25
  },
  listContainer: {
    // flexDirection: "row"
  },
  container: {
    backgroundColor: colors.loader,
    marginBottom: 15,
    borderRadius: 25,
    height: 200,
    width: "47%",
    justifyContent: "flex-end",
  },
  title: {
    marginLeft: 15,
    marginBottom: 8,
    color: "white",
    fontSize: 23,
    fontWeight: 200
  }
});
