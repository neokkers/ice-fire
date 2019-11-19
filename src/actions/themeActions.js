import * as actionTypes from "./types";

export const setTheme = theme => {
  return {
    type: actionTypes.SET_THEME,
    payload: theme
  };
};
