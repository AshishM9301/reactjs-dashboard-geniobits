import { combineReducers } from "redux";

import errorReducer from "./_errorReducer";
import authReducer from "./_authReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
});
