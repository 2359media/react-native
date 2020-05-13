import React, {useRef, useEffect, useState, useCallback} from 'react';
import {Animated, ActivityIndicator, Text} from 'react-native';
import styles from './styles';

const Loading = {
  show: text => {},
  hide: () => {},
};

const LoadingOverlay = () => {
  const [{visible, text}, setLoading] = useState({visible: false});
  const visibleA = useRef(new Animated.Value(0)).current;

  Loading.show = useCallback(t => {
    setLoading({visible: true, text: t});
  }, []);

  Loading.hide = useCallback(() => {
    setLoading({visible: false});
  }, []);

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

Loading.Overlay = LoadingOverlay;

export default Loading;
