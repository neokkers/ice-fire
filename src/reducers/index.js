import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { materialsReducer } from "./materialsReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  materials: materialsReducer
});

export default rootReducer;
