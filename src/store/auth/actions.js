import { axiosSignUp, axiosSignIn } from "~api";
import { Alert } from "react-native";

export const signUp =
  ({ email, password }) =>
  async (dispatch) => {
    if (!email && !password) {
      Alert.alert(
        "¡Surgió un error!",
        "No te olvides de introducir un correo electrónico y una contraseña",
        [{ text: "Volver" }]
      );
      return null;
    }
    if (!email) {
      Alert.alert(
        "¡Surgió un error!",
        "No te olvides de introducir un correo electrónico",
        [{ text: "Volver" }]
      );
      return null;
    }
    if (!password) {
      Alert.alert(
        "¡Surgió un error!",
        "No te olvides de introducir una contraseña",
        [{ text: "Volver" }]
      );
      return null;
    } else if (password.length < 6) {
      Alert.alert(
        "¡Surgió un error!",
        "La contraseña debe tener al menos 6 carácteres",
        [{ text: "Volver" }]
      );
      return null;
    }

    try {
      await axiosSignUp.post("", { email, password });
      Alert.alert(
        "Registrado con éxito",
        "Ya pudes volver a la pantalla anterior para iniciar sesión",
        [{ text: "Aceptar" }]
      );
      return null;
    } catch (error) {
      const { message } = error.response.data.error;
      if (message === "INVALID_EMAIL") {
        Alert.alert(
          "¡Surgió un error!",
          "El correo electrónico ingresado es inválido",
          [{ text: "Volver" }]
        );
        return null;
      }
      if (message === "EMAIL_EXISTS") {
        Alert.alert(
          "¡Surgió un error!",
          "El correo electrónico ingresado ya se encuentra registrado",
          [{ text: "Volver" }]
        );
        return null;
      }
      Alert.alert("Error", message);
    }
  };

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosSignIn.post("", { email, password });
      console.log(data);
      dispatch({
        type: "SIGN_IN",
        idToken: data.idToken,
        email: data.email,
        displayName: data.displayName,
      });
    } catch (error) {
      const { message } = error.response.data.error;
      if (message === "EMAIL_NOT_FOUND") {
        Alert.alert(
          "¡Surgió un error!",
          "El correo electrónico ingresado no se encuentra registrado",
          [{ text: "Volver" }]
        );
        return null;
      }
      if (message === "INVALID_PASSWORD") {
        Alert.alert(
          "¡Surgió un error!",
          "La contraseña ingresa no es correcta",
          [{ text: "Volver" }]
        );
        return null;
      }
      Alert.alert("Error", message);
    }
  };

// export const getUserData = () => async (dispatch) => {
//   try {
//     const { data } = await axiosGetUserData.post("", {
//       idToken: "IjYonIID4Lf65WjOaqH2kauUlim2",
//     });
//     console.log(data);
//   } catch (error) {
//     console.log(error.response);
//   }
// };
