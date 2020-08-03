import logedReducer from "./isLoged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLoged: logedReducer,
});

export default allReducers;
