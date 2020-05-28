import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const StackNavigator = ({screens}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      {Object.keys(screens).map(k => (
        <Stack.Screen key={k} name={k} component={screens[k]} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
