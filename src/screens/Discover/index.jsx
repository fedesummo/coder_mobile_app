import { FlatList, StyleSheet } from "react-native";
import { ScreenContainer, Header, PlaceItem } from "~components";
import { useAppContext } from "~context/App";
import places from "~constants/places";
import colors from "~constants/colors";

const Discover = () => {
  const renderItem = ({ item }) => (
    <PlaceItem data={item} style={styles.item} />
  );

  return (
    <ScreenContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={places}
        ListHeaderComponent={
          <Header heading="Descubrí" subHeading="¿Ya conocías estos lugares?" />
        }
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
  item: {
    width: "47%",
  },
});
