import { axiosSignUp, axiosSignIn } from "~api";

export const signUp = (formData) => async (dispatch) => {
  try {
    const { data } = await axiosSignUp.post("", formData);
    console.log(data);
    // dispatch({
    //   type: "SIGN_UP",
    // });
  } catch (error) {
    console.log(error.response);
  }
};

export const signIn = (formData) => async (dispatch) => {
  try {
    const { data } = await axiosSignIn.post("", formData);
    dispatch({
      type: "SIGN_IN",
      idToken: data.idToken,
      email: data.email,
      displayName: data.displayName,
    });
  } catch (error) {
    console.log(error);
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
