import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

export const ReduxContainer = ({
  reducers,
  initialState,
  children,
  persistKeys,
}) => {
  const combinedReducer = combineReducers(reducers);
  const persistConfig = {key: 'root', storage, whitelist: persistKeys};
  const reducer = persistReducer(persistConfig, combinedReducer);
  const store = createStore(
    reducer,
    initialState,
    (window.__REDUX_DEVTOOLS_EXTENSION__ || (() => {}))(),
  );
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
