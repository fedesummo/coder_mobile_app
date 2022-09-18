import { axiosSignUp, axiosSignIn, axiosIdToken } from "~api";
import {
  saveRefreshTokenOnAuthDb,
  getLastRefreshTokenFromAuthDb,
} from "~db/auth";
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
      await saveRefreshTokenOnAuthDb(refreshToken);
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

export const signOut = () => (dispatch) => {
  dispatch({
    type: "SIGN_OUT",
    payload: null,
  });
};

export const validateLocalResfreshToken = () => async (dispatch) => {
  try {
    const queryResult = await getLastRefreshTokenFromAuthDb();
    const { refreshToken } = queryResult.rows._array[0];
    const res = await axiosIdToken.post("", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    console.log(res.data)
    const { user_id } = res.data;
    dispatch({
      type: "SIGN_IN",
      payload: { user_id },
    });
  } catch (error) {
    console.log("error", error.response);
  }
};

// export const getUserData = () => async (dispatch) => {
//   const
//   try {
//     const { data } = await axiosGetUserData.post("", {
//       idToken: "IjYonIID4Lf65WjOaqH2kauUlim2",
//     });
//     console.log(data);
//   } catch (error) {
//     console.log(error.response);
//   }
// };
