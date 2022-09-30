import { Input, PrimaryBtn, SecondaryBtn } from "~components";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "~store/auth/actions";
import { View, Image } from "react-native";
import snLogo from "./assets/sn-logo.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./styles";

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
            style={styles.formGap}
          />

          <PrimaryBtn text="Ingresar" onPress={submitForm} />
          <SecondaryBtn
            text="¿No tienes una cuenta?"
            onPress={() => navigation.navigate("SignUp")}
            style={styles.signUpBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;
