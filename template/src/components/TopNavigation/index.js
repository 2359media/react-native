import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {useSafeArea} from 'react-native-safe-area-context';
import Button from '../Button';
import styles from './styles';

const TopNavigation = ({modal, title, leftButtons, rightButtons, style}) => {
  const safeArea = useSafeArea();
  const nav = useContext(NavigationContext);
  const canGoBack = nav.canGoBack();
  const [sideWidth, setSideWidth] = useState(
    canGoBack || leftButtons || rightButtons ? 50 : 0,
  );

  function onLayout(e) {
    const newWidth = e.nativeEvent.layout.width;
    newWidth > sideWidth && setSideWidth(newWidth);
  }

  return (
    <View style={[styles.container(safeArea, modal), style]}>
      <View style={styles.bar}>
        <View style={styles.left(sideWidth)} onLayout={onLayout}>
          {canGoBack && (
            <Button
              type="barItem"
              onPress={nav.goBack}
              icon={modal ? 'close' : 'back'}
            />
          )}
          {leftButtons}
        </View>
        <View style={styles.center}>
          <Text style={styles.title(sideWidth)} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={styles.right(sideWidth)} onLayout={onLayout}>
          {rightButtons}
        </View>
      </View>
    </View>
  );
};

export default TopNavigation;
