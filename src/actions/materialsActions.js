import * as actionTypes from "./types";
import ApiService from "../services/ApiService";
import ErrMsgService from "../services/ErrMsgService";

const apiService = new ApiService();
const errMsgService = new ErrMsgService();

/**
 * Materials List
 **/
const materialsListReq = () => ({ type: actionTypes.MATERIALS_LIST_REQ });

const materialsListSuccess = (type, data, next) => ({
  type: actionTypes.MATERIALS_LIST_SUCCESS,
  payload: {
    type,
    data,
    next
  }
});

const materialsListError = type => ({
  type: actionTypes.MATERIALS_LIST_ERROR,
  payload: errMsgService.getMsgByType(type)
});

export const fetchMaterialList = (type, page) => {
  return dispatch => {
    dispatch(materialsListReq());
    apiService
      .getList(type, page)
      .then(r => {
        console.log(r.headers.link);
        let next = r.headers.link.includes("next") ? ++page : null;
        dispatch(materialsListSuccess(type, r.data, next));
      })
      .catch(err => {
        dispatch(materialsListError(type));
      });
  };
};

/**
 * Materials Single
 **/
const materialsSingleReq = () => ({ type: actionTypes.MATERIALS_SINGLE_REQ });

const materialsSingleSuccess = (type, data) => ({
  type: actionTypes.MATERIALS_SINGLE_SUCCESS,
  payload: {
    type,
    data
  }
});

const materialsSingleError = type => ({
  type: actionTypes.MATERIALS_SINGLE_ERROR,
  payload: errMsgService.getMsgByType(type)
});

export const fetchMaterialSingle = (type, id) => {
  return dispatch => {
    dispatch(materialsSingleReq());
    apiService
      .getSingle(type, id)
      .then(r => {
        dispatch(materialsSingleSuccess(type, r.data));
      })
      .catch(err => {
        dispatch(materialsSingleError(type.substring(0, type.length - 1)));
      });
  };
};

//
