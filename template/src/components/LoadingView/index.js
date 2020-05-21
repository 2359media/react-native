import React, {useRef, useEffect} from 'react';
import {Animated, ActivityIndicator, Text} from 'react-native';
import styles from './styles';

const LoadingView = ({visible, text}) => {
  const visibleA = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(visibleA, {
      toValue: Number(visible),
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, visibleA]);

  return (
    <Animated.View
      style={styles.container(visibleA)}
      pointerEvents={visible ? 'auto' : 'none'}>
      <Animated.View style={styles.aiContainer(visibleA)}>
        <ActivityIndicator animating={visible} size="large" />
        {!!text && <Text style={styles.text}>{text}</Text>}
      </Animated.View>
    </Animated.View>
  );
};

export default LoadingView;
