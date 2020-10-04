import logedReducer from "./isLoged";
import tokenReducer from "./tokenStore";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLoged: logedReducer,
  tokenHandler: tokenReducer,
});

export default allReducers;
