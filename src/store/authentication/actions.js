import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "~firebase/index";

export const signUp = (email, password) => async (dispatch) => {
  try {
    const res = await fetch(URL_AUTH_SIGN_UP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      })
    });

    const data = await res.json();

    dispatch({
        type: "SIGN_UP",
        
    })

  } catch (error) {
    console.log(error);
  }
};
