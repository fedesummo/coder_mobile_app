// import { URL_API } from "~firebase/index";

// export const setUsername = (username) => ({
//   type: "SET_USERNAME",
//   username: username,
// });

// export const setUsername = (username) => async (dispatch) => {
//   try {
//     const res = await fetch(`${URL_API}/users.json`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ msg: "i'm the first Firebase entry!" }),
//     });
//     const json = await res.json()
//     console.log(json)
//     // falta pasarle el username a la store
//   } catch (error) {
//     console.log(error);
//   }
// };


export const setPoints = (points) => ({
  type: "SET_POINTS",
  points: points,
});
