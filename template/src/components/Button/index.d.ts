import {ReactElement} from 'react';
import {TouchableOpacityProps} from 'react-native';
import icons from '../../res/icons';

interface ButtonProps extends TouchableOpacityProps {
  icon?: keyof typeof icons;
  text?: string;
  tintColor?: string;
  type?: 'primary' | 'barItem';
}

declare const Button: (props: ButtonProps) => ReactElement;

export default Button;
