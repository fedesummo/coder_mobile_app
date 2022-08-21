import { StyleSheet, FlatList, View } from "react-native";
import Container from "~components/Container";
import places from "~constants/places";

const MostVisitedList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Container heading={item.name} />
    </View>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={places}
      renderItem={renderItem}
    />
  );
};

export default MostVisitedList;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 130,
    marginRight: 15,
  },
});
