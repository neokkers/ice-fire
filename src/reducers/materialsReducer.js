import * as actionTypes from "../actions/types";

const initialState = {
  lists: {
    loading: false,
    books: {
      data: null,
      next: null
    },
    characters: {
      data: null,
      next: null
    },
    houses: {
      data: null,
      next: null
    },
    error: null
  },
  single: {
    loading: false,
    books: null,
    characters: null,
    houses: null,
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
          [action.payload.type]: {
            data: state.lists[action.payload.type].data
              ? [
                  ...state.lists[action.payload.type].data,
                  ...action.payload.data
                ]
              : action.payload.data,
            next: action.payload.next
          }
        }
      };
    case actionTypes.MATERIALS_LIST_ERROR:
      return {
        ...state,
        lists: {
          ...state.lists,
          error: action.payload
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
          loading: false,
          [action.payload.type]: action.payload.data
        }
      };
    case actionTypes.MATERIALS_SINGLE_ERROR:
      return {
        ...state,
        single: {
          ...state.single,
          error: action.payload
        }
      };
    default:
      return state;
  }
};
