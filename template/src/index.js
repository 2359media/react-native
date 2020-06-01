import React from 'react';

import Config from './constants/Config';
import reducers, {persistKeys} from './reducers';
import screens from './screens';
import LoadingView from './components/LoadingView';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ReduxContainer} from './utils/reduxUtils';
import {NavigationContainer, RootNavigator} from './utils/navigationUtils';
import {LoadingContainer} from './utils/loadingUtils';
import {ApiContainer} from './utils/apiUtils';

const App = () => {
  return (
    <ReduxContainer
      reducers={reducers}
      persistKeys={Config.IS_PERSIST ? persistKeys : []}>
      <NavigationContainer>
        <SafeAreaProvider>
          <LoadingContainer LoadingView={LoadingView}>
            <ApiContainer baseURL={Config.BASE_URL}>
              <RootNavigator screens={screens} />
            </ApiContainer>
          </LoadingContainer>
        </SafeAreaProvider>
      </NavigationContainer>
    </ReduxContainer>
  );
};

export default App;
