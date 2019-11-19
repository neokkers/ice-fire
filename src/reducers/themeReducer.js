import * as actionTypes from "../actions/types";
import { lightTheme } from "../views/themes/themes";

const initialState = {
  theme: lightTheme
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      return {
        theme: action.payload
      };
    default:
      return state;
  }
};
