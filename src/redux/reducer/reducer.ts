
export interface state {
  artists: any[];
};

const InitialState:state = {
    artists: [],
};

export default function rootReducer(state = InitialState) {


    return state;
}