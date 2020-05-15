import ActionType from '../constants/ActionType';

const initialState = {
  firstTime: true,
  token: null,
};

function appReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ActionType.APP_SET_FIRST_TIME:
      return {
        ...state,
        firstTime: payload,
      };
    case ActionType.APP_SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
}

export default appReducer;
