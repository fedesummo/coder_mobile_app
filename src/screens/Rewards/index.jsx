import { ScreenContainer, Header } from "~components";
import { FlatList, View, StyleSheet } from "react-native";
import { useAppContext } from "~context/App";
import rewards from "./constants/rewards";
import Reward from "./components/Reward";

const Rewards = () => {
  const { userPoints } = useAppContext();

  const renderItem = ({ item }) => <Reward data={item} />;

  return (
    <ScreenContainer>
      <FlatList
        ListHeaderComponent={<Header heading="Beneficios" subHeading="¿Listo para canjear tus puntos?"/>}
        showsVerticalScrollIndicator={false}
        data={rewards}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
};

export default Rewards;

const styles = StyleSheet.create({
});
