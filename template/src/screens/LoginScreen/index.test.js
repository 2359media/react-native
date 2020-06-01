import React from 'react';
import {
  renderer,
  TestContainer,
  navigation,
  Alert,
} from '../../utils/testUtils';
import LoginScreen from '.';

const tree = renderer(<TestContainer Component={LoginScreen} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('success login', () => {
  tree.run('userInput', 'onChangeText', 'john');
  tree.run('passInput', 'onChangeText', '1234');
  tree.run('loginButton');
  expect(navigation.reset).toBeCalledWith({
    index: 0,
    routes: [{name: 'Home'}],
  });
});

test('failed login', () => {
  tree.run('passInput', 'onChangeText', '4321');
  tree.run('loginButton');
  expect(navigation.reset).not.toBeCalled();
  expect(Alert.alert).toBeCalledWith('Error', 'Wrong username or password');
});
