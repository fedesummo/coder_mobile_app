import { View, Text, StyleSheet } from "react-native";

const Section = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 25,
  },
});
