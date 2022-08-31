const initialState = {
  token: null,
  userId: null,
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return "";
    default:
      return state;
  }
};
