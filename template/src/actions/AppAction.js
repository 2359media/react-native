import ActionType from '../constants/ActionType';

const AppAction = {
  setFirstTime: firstTime => ({
    type: ActionType.APP_SET_FIRST_TIME,
    payload: firstTime,
  }),

  setToken: token => ({
    type: ActionType.APP_SET_TOKEN,
    payload: token,
  }),
};

export default AppAction;
