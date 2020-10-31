import logedReducer from "./isLoged";
import tokenReducer from "./tokenStore";
import remoteApi from "./remoteAPI"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLoged: logedReducer,
  tokenHandler: tokenReducer,
  remoteAPI: remoteApi,
});

export default allReducers;
