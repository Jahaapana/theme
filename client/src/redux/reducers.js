import { combineReducers } from "redux";

function themeDetailsReducer(
  value = {
    id: "",
    name: "",
    theme: "white",
  },
  action
) {
  switch (action.type) {
    case "UPDATE_THEME":
      return {
        ...value,
        ...action.payload,
      };
    case "UPDATE_LOGIN":
      return {
        ...value,
        ...action.payload,
      };
    default:
      return value;
  }
}

const rootReducer = combineReducers({
  themeData: themeDetailsReducer,
});

export default rootReducer;
