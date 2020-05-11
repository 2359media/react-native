import {ReactElement} from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';

interface ButtonProps {
  icon?: ImageSourcePropType;
  onPress?(): void;
  style?: ViewStyle;
  text?: string;
  tintColor?: string;
  type?: 'primary' | 'barItem';
}

declare const Button: (props: ButtonProps) => ReactElement;

export default Button;
