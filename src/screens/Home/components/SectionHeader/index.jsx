import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SectionHeader = ({ heading, toScreen }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      {toScreen && (
        <Pressable onPress={() => navigation.push(toScreen)}>
          <Text style={styles.link}>Ver todos {">"}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 3,
  },
  link: {
    fontSize: 13,
    marginRight: 8,
  },
});
