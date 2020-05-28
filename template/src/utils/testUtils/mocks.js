import {Dimensions, UIManager, LayoutAnimation, Alert} from 'react-native';

// mock timer
jest.useFakeTimers();

// mock platform
export const mockPlatform = os => {
  const Platform = require.requireActual('Platform');
  Platform.OS = os;
  Platform.select = args => args[os];
};

// mock console
export const consoleError = jest.fn();
export const consoleWarn = jest.fn();
console.error = consoleError;
console.warn = consoleWarn;

// mock dimension
let _dim = {width: 375, height: 812};
const _dimListeners = [];
Dimensions.get = () => _dim;
Dimensions.set = d => {
  _dim = d;
  _dimListeners.forEach(l => l({screen: _dim, window: _dim}));
};
Dimensions.addEventListener = (_, l) => _dimListeners.push(l);
Dimensions.removeEventListener = (_, l) =>
  _dimListeners.splice(_dimListeners.indexOf(l), 1);

// mock animation
UIManager.setLayoutAnimationEnabledExperimental = jest.fn();
LayoutAnimation.configureNext = jest.fn();

// mock async-storage
jest.mock('@react-native-community/async-storage', () => ({
  setItem: () => Promise.reject(),
  getItem: () => Promise.reject(),
}));

// mock persist-gate
jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));

// mock useNativeDriver
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// mock axios
let _route;
jest.setMock('axios', {
  mockResponse: route => (_route = route),
  request: req => {
    const routes = require('../../../server/routes');
    const request = {...req, body: req.data};
    const response = (_route || routes)(request);
    if (!response) {
      return Promise.reject(new Error('Network Error'));
    }
    const {status = 200, data} = response;
    if (status < 300) {
      return Promise.resolve({status, data});
    } else {
      const err = new Error(`Request failed with status code ${status}`);
      err.response = {status, data};
      return Promise.reject(err);
    }
  },
});

// mock alert
Alert.alert = jest.fn();
