import { StyleSheet, FlatList, View } from "react-native";
import { PlaceItem } from "~components";
import { places } from "~constants";

const MostVisitedList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <PlaceItem data={item} />
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
