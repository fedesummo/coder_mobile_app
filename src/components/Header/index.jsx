import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useMemo } from "react";
import styles from "./styles";

const Header = ({ heading }) => {
  const navigation = useNavigation();
  const iconsSize = useMemo(() => 30, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={iconsSize} color="black" />
      </Pressable>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      <Pressable onPress={() => {}}>
        <FontAwesome5 name="user-circle" size={iconsSize} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;
