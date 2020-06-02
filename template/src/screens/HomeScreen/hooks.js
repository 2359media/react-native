import {useState, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useRequest} from '../../utils/apiUtils';
import TodoApi from '../../apis/TodoApi';
import TodoAction from '../../actions/TodoAction';
import AccountApi from '../../apis/AccountApi';
import AppAction from '../../actions/AppAction';

export const useTodosState = () => {
  const dispatch = useDispatch();
  const request = useRequest();

  const [{loading, refreshing, error}, setState] = useState({});
  const todos = useSelector(s => s.todo.all);

  const reload = useCallback(
    (refresh = true) => {
      setState({loading: true, refreshing: refresh, error: null});
      request(TodoApi.getAll())
        .then(r => {
          dispatch(TodoAction.set(r.data));
          setState({loading: false, refreshing: false});
        })
        .catch(e => {
          setState({loading: false, refreshing: false, error: e.statusText});
        });
    },
    [dispatch, request],
  );

  useEffect(() => reload(false), [reload]);

  return {loading, refreshing, error, reload, todos};
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const request = useRequest();
  const navigation = useNavigation();

  function logout() {
    request(AccountApi.logout(), {showLoading: true}).finally(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});

      // make sure transition is finished to avoid glitch, could be better
      setTimeout(() => dispatch(AppAction.setToken(null)), 1000);
    });
  }

  return logout;
};
