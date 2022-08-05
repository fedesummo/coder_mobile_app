import fontSizes from "~constants/fontSizes";
import snLogo from "./assets/sn-logo.png";
import colors from "~constants/colors";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState, useEffect, useRef } from "react";

const Welcome = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef();

  const onChangeText = (input) => setUsername(input);

  const submitUsername = () => {
    if (username) {
      setError("");
      inputRef.current.blur();
    } else {
      setError("No te olvides de ingresar tu nombre");
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

        <View style={styles.inputContainer}>
          {/* Input */}
          <TextInput
            ref={inputRef}
            value={username}
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Introduce tu nombre aquí..."
          />

          {/* Error message */}
          {!!error && <Text style={{ textAlign: "center" }}>{error}</Text>}
        </View>

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
  inputContainer: {
    marginTop: 80,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    textAlign: "center",
    fontSize: fontSizes.general,
    paddingVertical: 15,
    borderColor: colors.black,
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
