import 'react-native-gesture-handler';
import React from 'react';
import ModalNavigator from './ModalNavigator';
import StackNavigator from './StackNavigator';
import SwitchNavigator from './SwitchNavigator';
import TabNavigator from './TabNavigator';

const getScreen = (key, screen) => {
  if (typeof screen !== 'object') {
    return screen;
  }
  const screens = {};
  Object.keys(screen).forEach(k => (screens[k] = getScreen(k, screen[k])));

  if (key.indexOf('Switch') > 0) {
    return () => <SwitchNavigator screens={screens} />;
  } else if (key.indexOf('Tab') > 0) {
    return () => <TabNavigator screens={screens} />;
  } else if (key.indexOf('Modal') > 0) {
    return () => <ModalNavigator screens={screens} />;
  } else {
    return () => <StackNavigator screens={screens} />;
  }
};

export {NavigationContainer} from '@react-navigation/native';

export const RootNavigator = ({screens}) => {
  return getScreen('RootModal', screens)();
};
