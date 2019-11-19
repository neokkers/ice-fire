import * as actionTypes from "../actions/types";
import { lightTheme, darkTheme } from "../views/themes/themes";

const initialState = {
  theme: localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      localStorage.setItem("theme", action.payload.name);
      return {
        theme: action.payload
      };
    default:
      return state;
  }
};
