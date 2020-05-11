import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Color from '../../constants/Color';

const HIT_SLOP = {bottom: 8, top: 8, left: 8, right: 8};

const Button = ({
  type = 'primary',
  text,
  icon,
  tintColor = Color.TINT,
  onPress,
  style,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      hitSlop={HIT_SLOP}
      style={[styles[type + 'Container'](tintColor), style]}
      activeOpacity={0.8}
      onPress={() => onPress()}
      {...props}>
      {!!icon && (
        <Image source={icon} style={styles[type + 'Icon'](tintColor)} />
      )}
      {!!text && (
        <Text style={styles[type + 'Text'](tintColor)} numberOfLines={1}>
          {text}
        </Text>
      )}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
