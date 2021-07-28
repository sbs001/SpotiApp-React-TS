import { GET_NEW_RELEASES } from "../actions";
import { Action, State } from "../../interface";


const InitialState:State = {
    artists: [],
};

export default function rootReducer(state = InitialState, action:Action) {

    if (action.type === GET_NEW_RELEASES)
      return {
        ...state,
        artists: action.payload.albums.items
      }
    return state;
}