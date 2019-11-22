import * as actionTypes from "./types";
import ApiService from "../services/ApiService";

const apiService = new ApiService();

const materialsListReq = () => ({ type: actionTypes.MATERIALS_LIST_REQ });

const materialsListSuccess = (type, data) => ({
  type: actionTypes.MATERIALS_LIST_SUCCESS,
  payload: {
    type,
    data
  }
});
// const materialsListError = () => ({
//   type: actionTypes.MATERIALS_LIST_SUCCESS,
//   payload: {
//     type,
//     data
//   }
// });

export const fetchMaterialList = type => {
  return dispatch => {
    dispatch(materialsListReq());
    apiService
      .getResource(type)
      .then(r => {
        dispatch(materialsListSuccess(type, r.data));
      })
      .catch(err => {});
    // apiService = new ApiService();

    // async componentDidMount() {
    //   const items = await this.apiService.getResource("books");
    //   console.log(items);
    // }
  };
  // return {
  //   type: actionTypes.MATERIALS_LIST_REQ,
  //   payload: theme
  // };
};
