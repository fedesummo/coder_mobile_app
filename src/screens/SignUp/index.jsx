import { SafeAreaView, BackBtn, Input, PrimaryBtn } from "~components";
import { signUp } from "~store/auth/actions";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { useState } from "react";
import styles from "./styles";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const handleEmailChange = (input) => setEmail(input);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (input) => setPassword(input);

  const submitForm = () =>
    dispatch(
      signUp({
        email,
        password,
      })
    );

  return (
    <SafeAreaView style={styles.screenCnt}>
      <View style={styles.backBtn}>
        <BackBtn />
      </View>
      <View style={styles.formCnt}>
        <Input
          placeholder="Introduce aquí tu email..."
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          style={styles.inputsGap}
        />
        <Input
          placeholder="Introduce aquí tu contraseña..."
          value={password}
          onChangeText={handlePasswordChange}
          style={styles.formGap}
        />
        <PrimaryBtn text="Registrarse" onPress={submitForm} />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
