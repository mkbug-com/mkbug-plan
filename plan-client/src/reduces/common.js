import * as Const from './../const';

const COMMON = {
  AppStatus: Const.COMMON.APP_STATUS.INITING
}

export default function (state = COMMON, action) {
  switch (action.type) {
    default:
      return state;
  }
}