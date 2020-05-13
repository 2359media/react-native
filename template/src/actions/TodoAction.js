import ActionType from '../constants/ActionType';

const TodoAction = {
  set: todos => ({
    type: ActionType.TODOS_SET,
    payload: todos,
  }),
};

export default TodoAction;
