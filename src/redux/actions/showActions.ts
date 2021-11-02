import { Show } from '../../models/Show';

export const SET_SHOW = 'show//SET_SHOW';

interface SetShowAction {
  type: typeof SET_SHOW;
  payload: Show;
}


export type ShowActions = SetShowAction;
