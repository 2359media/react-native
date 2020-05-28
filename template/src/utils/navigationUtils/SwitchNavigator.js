import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const SwitchNavigator = ({screens}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}>
      {Object.keys(screens).map(k => (
        <Stack.Screen key={k} name={k} component={screens[k]} />
      ))}
    </Stack.Navigator>
  );
};

export default SwitchNavigator;
