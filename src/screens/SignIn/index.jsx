import { Input, PrimaryBtn, SecondaryBtn } from "~components";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors, fontSizes } from "~constants";
import { signIn } from "~store/auth/actions";
import snLogo from "./assets/sn-logo.png";
import { useState } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const handleEmailChange = (input) => setEmail(input);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (input) => setPassword(input);

  const submitForm = () => {
    dispatch(signIn({ email, password }));
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image source={snLogo} style={styles.logo} />
        </View>

        {/* Form */}
        <View>
          <Input
            placeholder="Introduce aquí tu email..."
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
          />
          <Input
            placeholder="Introduce aquí tu contraseña..."
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>

        <PrimaryBtn text="Ingresar" onPress={submitForm} />
        <SecondaryBtn
          text="¿No tienes una cuenta?"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
    marginTop: 80,
    marginBottom: 15,
  },
});
