import fontSizes from "~constants/fontSizes";
import snLogo from "./assets/sn-logo.png";
import { useState, useRef } from "react";
import { useAppContext } from "~context/App";
import colors from "~constants/colors";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

const Welcome = ({ navigation }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const inputRef = useRef();

  const { setUsername } = useAppContext();

  const onChangeText = (input) => setEnteredUsername(input);

  const submitUsername = () => {
    if (enteredUsername) {
      setUsername(enteredUsername);
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "No olvides ingresar tu nombre",
        "Utilizaremos ese dato para brindarte una experiencia personalizada, no lo compartiremos con nadie",
        [{ text: "Volver" }]
      );
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.contentContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={snLogo} style={styles.logo} />
        </View>

        {/* Input */}
        <TextInput
          ref={inputRef}
          value={enteredUsername}
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Introduce tu nombre aquí..."
        />

        {/* Button */}
        <Pressable style={styles.btn} onPress={submitUsername}>
          <Text style={styles.btnText}>Ingresar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: "80%",
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 2.2,
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    textAlign: "center",
    fontSize: fontSizes.general,
    paddingVertical: 15,
    borderColor: colors.black,
    marginTop: 80,
    marginBottom: 15,
  },
  btn: {
    borderRadius: 30,
    paddingVertical: 18,
    backgroundColor: colors.black,
  },
  btnText: {
    fontSize: fontSizes.general,
    textAlign: "center",
    color: "white",
  },
});
