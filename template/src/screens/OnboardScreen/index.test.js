import React from 'react';
import {renderer, TestContainer, navigation} from '../../utils/testUtils';
import OnboardScreen from '.';

const tree = renderer(<TestContainer Component={OnboardScreen} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('reset to login', () => {
  tree.run('finishButton');
  expect(navigation.reset).toBeCalledWith({
    index: 0,
    routes: [{name: 'Login'}],
  });
});
