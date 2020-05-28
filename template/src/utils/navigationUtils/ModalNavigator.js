import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const ModalNavigator = ({screens}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      {Object.keys(screens).map(k => (
        <Stack.Screen key={k} name={k} component={screens[k]} />
      ))}
    </Stack.Navigator>
  );
};

export default ModalNavigator;
