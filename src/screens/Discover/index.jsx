import { SafeAreaView, Header, ImgBtn } from "~components";
import MasonryList from "@react-native-seoul/masonry-list";
import places from "~constants/places";
import { useCallback } from "react";
import styles from "./styles";

const Discover = () => {
  const getItemHeight = useCallback(
    (index) => {
      if (index === 0 || index === places.length - 1) {
        return 230;
      } else {
        return 260;
      }
    },
    [places]
  );

  const renderItem = useCallback(
    ({ item, i }) => (
      <ImgBtn
        data={item}
        style={{ ...styles.item, height: getItemHeight(i) }}
      />
    ),
    [styles]
  );

  return (
    <SafeAreaView>
      <MasonryList
        ListHeaderComponent={<Header heading="Descubrí" />}
        style={styles.listCnt}
        data={places}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Discover;
