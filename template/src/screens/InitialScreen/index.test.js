import React from 'react';
import {renderer, TestContainer, navigation} from '../../utils/testUtils';
import InitialScreen from '.';

test('reset to onboard', () => {
  const tree = renderer(
    <TestContainer
      initialState={{app: {firstTime: true, token: null}}}
      Component={InitialScreen}
    />,
  );
  tree.run();
  expect(navigation.reset).toBeCalledWith({
    index: 0,
    routes: [{name: 'Onboard'}],
  });
});

test('reset to login', () => {
  const tree = renderer(
    <TestContainer
      initialState={{app: {firstTime: false, token: null}}}
      Component={InitialScreen}
    />,
  );
  tree.run();
  expect(navigation.reset).toBeCalledWith({
    index: 0,
    routes: [{name: 'Login'}],
  });
});

test('reset to home', () => {
  const tree = renderer(
    <TestContainer
      initialState={{app: {firstTime: false, token: 'token'}}}
      Component={InitialScreen}
    />,
  );
  tree.run();
  expect(navigation.reset).toBeCalledWith({
    index: 0,
    routes: [{name: 'Home'}],
  });
});
