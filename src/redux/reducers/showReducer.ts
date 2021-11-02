import { Show } from "../../models/Show";
import { ShowActions, SET_SHOW } from "../actions/showActions";

export interface ShowReducerState {
    show: Show | {}
}

export function setShowAction(show: Show): ShowActions {
    console.log("set show actrion");
    console.log(show);
    return {
        type: SET_SHOW,
        payload: show
    }
}

export function getShowFromStore(store: any) {
    return store.showReducer.show;
}

const initialState: ShowReducerState = {
    show: {}
};

export default function showReducer(state = initialState, action: any) {
    switch (action.type) {
      case SET_SHOW:
        return {
          ...state,
          show: action.payload,
        };
      default:
        return state;
    }
  }
  