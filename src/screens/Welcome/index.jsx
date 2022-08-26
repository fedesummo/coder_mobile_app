import { colors, fontSizes } from "~constants";
import { useAppContext } from "~context/App";
import snLogo from "./assets/sn-logo.png";
import { PrimaryBtn } from "~components"
import { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";

import { useSelector } from "react-redux"
import { useEffect } from "react";

const Welcome = ({ navigation }) => {
  const store = useSelector((store) => store)
  useEffect(() => console.log(store), [store])

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
        <View style={styles.logoContainer}>
          <Image source={snLogo} style={styles.logo} />
        </View>

        <TextInput
          ref={inputRef}
          value={enteredUsername}
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Introduce tu nombre aquí..."
        />

        <PrimaryBtn text="Ingresar" onPress={submitUsername}/>
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
