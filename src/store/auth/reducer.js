const initialState = {
  idToken: "",
  email: "",
  displayName: "",
  photoUrl: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return "";
    // return { ...state,  };
    case "SIGN_IN":
      return {
        ...state,
        idToken: action.idToken,
        email: action.email,
        displayName: action.displayName,
      };
    default:
      return state;
  }
};
