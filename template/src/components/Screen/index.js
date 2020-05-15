import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Screen = ({style, ...props}) => {
  return <View style={[styles.container, style]} {...props} />;
};

export default Screen;
