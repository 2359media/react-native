const reducers = {
  app: require('./appReducer').default,
  todo: require('./todoReducer').default,
};

export const persistKeys = ['app'];

export default reducers;
