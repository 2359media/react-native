import React from 'react';
import {ScrollView, FlatList, SectionList, Animated} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import styles from './styles';

const keyExtractor = (_, key) => key.toString();

const components = [
  [ScrollView, FlatList, SectionList],
  [Animated.ScrollView, Animated.FlatList, Animated.SectionList],
];

const ContentView = ({style, animated = false, ...props}) => {
  const safeArea = useSafeArea();
  const animatedType = Number(animated);
  const componentType = props.renderItem ? (props.sections ? 2 : 1) : 0;
  const Component = components[animatedType][componentType];
  const isScrollView = componentType === 0;

  return (
    <Component
      keyboardShouldPersistTaps="handled"
      keyExtractor={keyExtractor}
      {...props}
      contentContainerStyle={[styles.container(safeArea, isScrollView), style]}
    />
  );
};

export default ContentView;
