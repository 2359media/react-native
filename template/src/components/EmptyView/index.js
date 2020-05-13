import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import styles from './styles';
import Button from '../Button';

const EmptyView = ({loading, text, onReload}) => {
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" animating />}
      {!!text && <Text style={styles.text}>{text}</Text>}
      {!loading && onReload && (
        <Button style={styles.button} text="Reload" onPress={onReload} />
      )}
    </View>
  );
};

export default EmptyView;
