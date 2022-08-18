import EmptyTopContainer from "~components/EmptyTopContainer"
import { FlatList, View, StyleSheet } from "react-native";
import { useAppContext } from "~context/App";
import rewards from "./constants/rewards";
import Reward from "./components/Reward";

const Rewards = () => {
  const { userPoints } = useAppContext();

  const renderItem = ({ item }) => <Reward data={item} />;

  return (
    <View style={styles.screenContainer}>
      <FlatList
        ListHeaderComponent={<EmptyTopContainer/>}
        showsVerticalScrollIndicator={false}
        data={rewards}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  screenContainer: {
    marginHorizontal: 25,
  },
});
