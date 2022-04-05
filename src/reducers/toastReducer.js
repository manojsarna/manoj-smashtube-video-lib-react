import { v4 as uuid } from "uuid";

export const toastReducer = (state, action) => {
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
      return [...state].filter((item) => item._id !== action.payload);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
