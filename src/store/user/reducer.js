const initialState = {
  username: "",
  points: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.username };
    case "SET_POINTS":
      return { ...state, points: action.points };
    default:
      return state;
  }
};

export default userReducer;
