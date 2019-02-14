import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import todoReducer from "./todoReducer";

export default combineReducers({
  item: itemReducer,
  list: todoReducer
});
