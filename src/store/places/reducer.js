const initialState = {
  places: [],
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PLACES":
      return { ...state, places: action.payload };
    default:
      return state;
  }
};

export default places;
