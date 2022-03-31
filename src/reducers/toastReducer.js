import { v4 as uuid } from "uuid";

export const toastReducer = (state, action) => {
  // console.log(state);
  // const initialState = {
  //   type: "",
  //   message: "",
  //   show: false,
  // };
  const initialState = [];

  switch (action.type) {
    case "TOAST_SUCCESS":
      return [
        ...state,
        { _id: uuid(), type: "success", message: action.payload, show: true },
      ];

    case "TOAST_ERROR":
      return [
        ...state,
        { _id: uuid(), type: "error", message: action.payload, show: true },
      ];

    case "TOAST_RESET":
      return initialState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
