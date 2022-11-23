import { axiosSignUp, axiosSignIn, axiosIdToken } from "~api";
import { Alert } from "react-native";
import {
  saveOnSecureStore,
  getFromSecureStore,
  deleteFromSecureStore,
} from "~utils";

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
    }
    try {
      const { data } = await axiosSignIn.post("", {
        email,
        password,
        returnSecureToken: true,
      });
      const { refreshToken, localId } = data;
      await saveOnSecureStore("refreshToken", refreshToken);
      dispatch({
        type: "SIGN_IN",
        payload: { user_id: localId },
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

export const signOut = () => async (dispatch) => {
  await deleteFromSecureStore("refreshToken");
  dispatch({
    type: "SIGN_OUT",
    payload: null,
  });
};

export const validateLocalResfreshToken = () => async (dispatch) => {
  try {
    const refreshToken = await getFromSecureStore("refreshToken");
    const res = await axiosIdToken.post("", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    const { user_id } = res.data;
    dispatch({
      type: "SIGN_IN",
      payload: { user_id },
    });
  } catch (error) {
    console.log("error", error);
  }
};
