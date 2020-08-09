import { COMMON_ACTIONS } from './../const';

export function fetchUser () {
  return function (dispatch, getState) {
    setTimeout(() => {
      dispatch({
        type: COMMON_ACTIONS.FETCH_START
      })
    }, 1000);

    setTimeout(() => {
      dispatch({
        type: COMMON_ACTIONS.FETCH_SUCCESS
      })
    }, 2000);
  }
}