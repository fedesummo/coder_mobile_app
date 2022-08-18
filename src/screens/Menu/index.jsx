import { View, Text, Image, Pressable } from "react-native";
import ScreenContainer from "~components/ScreenContainer";
import screens from "~constants/screens";
import styles from "./styles";

const Menu = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.btnsContainer}>
          {screens.map(
            (element) =>
              element.name !== "Menu" && (
                <Pressable
                  style={styles.btnContainer}
                  key={element.name}
                  onPress={() => {
                    navigation.push(element.name);
                  }}
                >
                  <Text style={styles.btnText}>{element.title}</Text>
                </Pressable>
              )
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Menu;
