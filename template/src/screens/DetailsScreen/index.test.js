import React from 'react';
import {renderer, TestContainer, navigation} from '../../utils/testUtils';
import DetailsScreen from '.';

const initialState = {
  todo: {
    all: [{id: 1, title: 'title', body: 'body'}],
  },
};

const tree = renderer(
  <TestContainer
    initialState={initialState}
    params={{id: 1}}
    Component={DetailsScreen}
  />,
);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('goto modal', () => {
  tree.run('modalButton');
  expect(navigation.navigate).toBeCalledWith('Modal');
});
