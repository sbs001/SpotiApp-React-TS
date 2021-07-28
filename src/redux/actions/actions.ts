import axios from "axios";
import { URL_ARTISTS, URL_NEW_RELEASES } from "../../constants";

export const GET_NEW_RELEASES = "GET_NEW_RELEASES";
export const GET_ARTISTS = "GET_ARTISTS";

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

export const getArtists = (artist:string) => {
  return function(dispatch:any){
    return axios.get(URL_ARTISTS+artist)
      .then( response => {
        dispatch({
          type:GET_ARTISTS,
          payload: response.data
        })
      })
  }
}
