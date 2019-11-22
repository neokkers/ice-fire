import * as actionTypes from "../actions/types";

const initialState = {
  lists: {
    loading: false,
    books: null,
    characters: null,
    houses: null,
    error: null
  },
  single: {
    loading: false,
    book: null,
    character: null,
    house: null,
    error: null
  }
};

export const materialsReducer = (state = initialState, action) => {
  switch (action.type) {
    // lists
    case actionTypes.MATERIALS_LIST_REQ:
      return {
        ...state,
        lists: {
          ...state.lists,
          loading: true
        }
      };
    case actionTypes.MATERIALS_LIST_SUCCESS:
      return {
        ...state,
        lists: {
          ...state.lists,
          loading: false,
          [action.payload.type]: action.payload.data
        }
      };

    // sinlge
    case actionTypes.MATERIALS_SINGLE_REQ:
      return {
        ...state,
        single: {
          ...state.single,
          loading: true
        }
      };
    case actionTypes.MATERIALS_SINGLE_SUCCESS:
      return {
        ...state,
        single: {
          ...state.single,
          loading: true
        }
      };
    default:
      return state;
  }
};
