const initialState = {
  list: [],
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PLACES":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default places;
