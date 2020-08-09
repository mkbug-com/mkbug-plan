import * as Const from './../const';

const COMMON = {
  AppStatus: Const.COMMON.APP_STATUS.INITING
}

export default function (state = COMMON, action) {
  switch (action.type) {
    case Const.COMMON_ACTIONS.FETCH_START:
      return {
        ...state,
        AppStatus: Const.COMMON.APP_STATUS.LOADING
      };
    case Const.COMMON_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        AppStatus: Const.COMMON.APP_STATUS.UNLOGIN
      };
    default:
      return state;
  }
}