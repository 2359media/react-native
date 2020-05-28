import React from 'react';
import {NavigationContext} from '@react-navigation/native';
import {SafeAreaContext} from 'react-native-safe-area-context';
import TestRenderer, {act} from 'react-test-renderer';
import Axios from 'axios';
import {ReduxContainer} from '../reduxUtils';
import {Loading} from '../loadingUtils';

export const renderer = component => {
  const tree = TestRenderer.create(component);
  const get = (testID, prop) => {
    try {
      const props = tree.root.findByProps({testID}).props;
      return prop ? props[prop] : props;
    } catch {
      return undefined;
    }
  };
  const run = (id, prop = 'onPress', ...params) => {
    act(() => {
      if (typeof id === 'string') {
        get(id)[prop](...params);
      }
      jest.runAllTimers();
    });
  };
  const update = tree.update;
  const toJSON = tree.toJSON;
  return {get, run, update, toJSON};
};

export const navigation = {
  navigate: jest.fn(),
  reset: jest.fn(),
  canGoBack: jest.fn(() => true),
};

export {Alert} from 'react-native';

Loading.show = jest.fn(Loading.show);
Loading.hide = jest.fn(Loading.hide);
export {Loading};

/**
 *
 * @param {(request: any) => ({ status: number, data: any })} fn e.g. req => ({status: 200, data: {}});
 */
export const mockResponse = fn => {
  Axios.mockResponse(fn);
};

export const TestContainer = ({initialState, Component, params}) => {
  return (
    <ReduxContainer
      reducers={require('../../reducers').default}
      persistKeys={[]}
      initialState={initialState}>
      <NavigationContext.Provider value={navigation}>
        <SafeAreaContext.Provider
          value={{top: 0, bottom: 0, left: 0, right: 0}}>
          <Component route={{params}} navigation={navigation} />
        </SafeAreaContext.Provider>
      </NavigationContext.Provider>
    </ReduxContainer>
  );
};
