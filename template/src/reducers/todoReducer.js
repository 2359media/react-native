import ActionType from '../constants/ActionType';

const initialState = {
  all: [],
};

function todoReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ActionType.TODOS_SET:
      return {...state, all: payload};
    case ActionType.APP_SET_TOKEN:
      return initialState;
    default:
      return state;
  }
}

export default todoReducer;
