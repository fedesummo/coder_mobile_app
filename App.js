import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View style={styles.appContainer}>

      <View>
        <TextInput style={styles.input}/>
        <Button title="Add"/>
      </View>

      <View>

      </View>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 30
  },
  input: {
    borderWidth: 1
  }
});
