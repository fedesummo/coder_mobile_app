import SectionItem from "./components/SectionItem";
import { FlatList } from "react-native";
import { screens } from "~constants";

const SectionsList = () => {
  const renderItem = ({ item }) => <SectionItem data={item} />;

  return (
    <FlatList
      horizontal
      data={screens}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SectionsList;
