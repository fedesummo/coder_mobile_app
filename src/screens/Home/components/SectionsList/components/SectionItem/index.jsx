import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const SectionItem = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.push(data.name)}
    >
      <Text style={styles.text}>{data.title}</Text>
    </Pressable>
  );
};

export default SectionItem;
