import axios from "axios";
import swal from "sweetalert";
import { URL_NEW_RELEASES } from "../../constants";

export const GET_NEW_RELEASES = "GET_NEW_RELEASES";

export const getNewRealses = () => {
  return function (dispatch: any) {
    return axios.get(URL_NEW_RELEASES).then((response) => {
      dispatch({
        type: GET_NEW_RELEASES,
        payload: response.data,
      });
    });
  };
};
