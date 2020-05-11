import React from 'react';
import {ScrollView, FlatList, SectionList, Animated} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import styles from './styles';

const keyExtractor = (_, key) => key.toString();

const components = [
  [ScrollView, FlatList, SectionList],
  [Animated.ScrollView, Animated.FlatList, Animated.SectionList],
];

const ContentView = ({contentContainerStyle, animated = false, ...props}) => {
  const safeArea = useSafeArea();
  const animatedType = Number(animated);
  const componentType = props.renderItem ? (props.sections ? 2 : 1) : 0;
  const Component = components[animatedType][componentType];

  return (
    <Component
      contentContainerStyle={[
        styles.container(safeArea, componentType === 0),
        contentContainerStyle,
      ]}
      keyboardShouldPersistTaps="handled"
      keyExtractor={keyExtractor}
      {...props}
    />
  );
};

export default ContentView;
