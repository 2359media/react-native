import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

type Styles = ViewStyle | TextStyle | ImageStyle;
type Style<T> = {[P in keyof T]: Styles | ((props: any) => Styles)};
type Generator<T> = Style<T> | ((props: any) => Style<T>);

export declare function createStylesheet<T>(generator: Generator<T>): Style<T>;
