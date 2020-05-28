import {useCallback} from 'react';
import {useStore} from 'react-redux';
import {Keyboard, Alert} from 'react-native';
import Axios from 'axios';
import {Loading} from '../loadingUtils';

let _baseURL;

export function useRequest() {
  const store = useStore();

  return useCallback(
    (api, {showLoading, loadingText, showError} = {}) => {
      const token = store.getState().app.token;
      const requestProps = {
        baseURL: _baseURL,
        timeout: 10000,
        headers: {'x-access-token': token},
        ...api,
      };

      showLoading && Keyboard.dismiss();
      showLoading && Loading.show(loadingText);

      return Axios.request(requestProps)
        .then(r => {
          const response = {
            data: r.data,
            status: r.status,
            statusText: (r.data || {}).message || r.statusText,
            headers: r.headers,
          };
          return response;
        })
        .catch(e => {
          e.response = e.response || {};
          const response = {
            data: e.response.data,
            status: e.response.status,
            statusText:
              (e.response.data || {}).message ||
              e.response.statusText ||
              e.message,
            headers: e.response.headers,
          };
          showError && Alert.alert('Error', response.statusText);
          throw response;
        })
        .finally(() => {
          showLoading && Loading.hide();
        });
    },
    [store],
  );
}

export const ApiContainer = ({baseURL, children}) => {
  _baseURL = baseURL;
  return children;
};
