import React from 'react';
import {
  renderer,
  TestContainer,
  navigation,
  mockResponse,
} from '../../utils/testUtils';
import HomeScreen from '.';

const tree = renderer(<TestContainer Component={HomeScreen} />);

test('snapshot before fetching data', () => {
  expect(tree).toMatchSnapshot();
});

test('snapshot after fetching data', () => {
  tree.run();
  expect(tree).toMatchSnapshot();
});

test('goto details', () => {
  tree.run('item::1');
  expect(navigation.navigate).toBeCalledWith('Details', {id: 1});
});

test('empty data', () => {
  mockResponse(() => ({data: []}));

  tree.run('refreshControl', 'onRefresh');
  expect(tree.get('refreshControl')).toBeUndefined();
  expect(tree.get('emptyView', 'text')).toEqual(
    "You don't have anything to do",
  );
});

test('error screen', () => {
  mockResponse(() => ({status: 400, data: {message: 'User not registered'}}));

  tree.run('emptyView', 'onReload');
  expect(tree.get('emptyView', 'text')).toEqual('User not registered');
});

test('server error', () => {
  mockResponse(() => ({status: 503}));

  tree.run('emptyView', 'onReload');
  expect(tree.get('emptyView', 'text')).toEqual(
    'Request failed with status code 503',
  );
});

test('network error', () => {
  mockResponse(() => undefined);

  tree.run('emptyView', 'onReload');
  expect(tree.get('emptyView', 'text')).toEqual('Network Error');
});

test('logout', () => {
  //back to default routes
  mockResponse(null);

  tree.run('logoutButton');
  expect(navigation.reset).toBeCalledWith({
    index: 0,
    routes: [{name: 'Login'}],
  });
});
