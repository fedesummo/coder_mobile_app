import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenContainer, BackBtn, Input, PrimaryBtn } from "~components";
import { signUp } from "~store/auth/actions";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  // const [name, setName] = useState("");
  // const handleNameChange = (input) => setName(input);

  const [email, setEmail] = useState("");
  const handleEmailChange = (input) => setEmail(input);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (input) => setPassword(input);

  const submitForm = () =>
    dispatch(
      signUp({
        email: email,
        password: password,
      })
    );

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.backBtn}>
        <BackBtn />
      </View>
      <View style={styles.form}>
        {/* <Input
          placeholder="Nombre"
          value={name}
          onChangeText={handleNameChange}
        /> */}
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
        />
      </View>

      <PrimaryBtn text="Registrarse" onPress={submitForm} />
    </ScreenContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    paddingHorizontal: "13%",
  },
  backBtn: {
    position: "absolute",
    top: 40,
    left: 25,
  },
  inputsGap: {
    marginVertical: 25,
  },
  btn: {},
  form: {
    marginVertical: 60,
  },
});
