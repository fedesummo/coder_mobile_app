import { axiosPlaces } from "~api";

export const getPlaces = () => async (dispatch) => {
  try {
    const { data } = await axiosPlaces.get();
    dispatch({
      type: "GET_PLACES",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
