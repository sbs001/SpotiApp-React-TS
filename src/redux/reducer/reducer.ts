import { GET_NEW_RELEASES } from "../actions/actions";
import { Action, State } from "../../interfaces/interface";


const InitialState:State = {
    newReleases: [],
};

export default function rootReducer(state = InitialState, action:Action) {

    if (action.type === GET_NEW_RELEASES)
      return {
        ...state,
        newReleases: action.payload
      }
    return state;
}