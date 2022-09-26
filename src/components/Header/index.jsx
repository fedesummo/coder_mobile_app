import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { signOut } from "~store/auth/actions";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import styles from "./styles";

const Header = ({ heading }) => {
  const navigation = useNavigation();
  const iconsSize = useMemo(() => 30, []);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={iconsSize} color="black" />
      </Pressable>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      <Pressable onPress={() => dispatch(signOut())}>
        <MaterialIcons name="logout" size={iconsSize} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;
