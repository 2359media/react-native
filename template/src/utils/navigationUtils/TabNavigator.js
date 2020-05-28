import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TabNavigator = ({screens}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      {Object.keys(screens).map(k => (
        <Tab.Screen key={k} name={k} component={screens[k]} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
