import {ReactElement} from 'react';
import {ScrollViewProps, FlatListProps, SectionListProps} from 'react-native';

export interface ContentViewProps<T>
  extends ScrollViewProps,
    FlatListProps<T>,
    SectionListProps<T> {
  animated?: boolean;
}

declare const ContentView: <T>(props: ContentViewProps<T>) => ReactElement;

export default ContentView;
