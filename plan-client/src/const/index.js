export const COMMON = {
  APP_STATUS: {
    INITING: 1,
    LOADING: 2,
    UNLOGIN: 3,
    LOGINED: 4
  }
}

const CommonBase = 10000;

export const COMMON_ACTIONS = {
  FETCH_START: CommonBase + 1,
  FETCH_SUCCESS: CommonBase + 2,
  FETCH_ERROR: CommonBase + 3
}


