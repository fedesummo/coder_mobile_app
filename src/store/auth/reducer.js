const initialState = {
  refreshToken: "",
  // localId: "",
  email: "",
  displayName: "",
  photoUrl: "",
};

const auth = (state = initialState, action) => {
  const { email, refreshToken, displayName, photoUrl } = action;
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        idToken: action.idToken,
        email: action.email,
        displayName: action.displayName,
      };
    case "SIGN_OUT":
      return initialState;
    default:
      return state;
  }
};
