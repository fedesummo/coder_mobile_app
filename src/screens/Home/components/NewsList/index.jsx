import NewsItem from "./components/NewsItem";
import { ItemsSeparator } from "~components";
import { FlatList } from "react-native";
import news from "./constants/news";

const NewsList = () => {
  const renderItem = ({ item }) => <NewsItem item={item} />;

  return (
    <FlatList
      horizontal
      data={news}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={ItemsSeparator}
    />
  );
};

export default NewsList;
