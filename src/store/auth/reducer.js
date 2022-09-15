const initialState = {
  // refreshToken: "",
  // localId: "",
  idToken: "",
  email: "",
  displayName: "",
  photoUrl: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, ...action.payload };
    case "SIGN_OUT":
      return initialState;
    default:
      return state;
  }
};

export default auth;
