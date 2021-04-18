import { ActionTypes } from "../types/actionTypes";

// const initialState = {
//   name: "Gustavo Moreno",
//   logged: true,
// };

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Login:
      return { ...action.payload, logged: true };
    case ActionTypes.Logout:
      return { logged: false };
    default:
      return state;
  }
};
