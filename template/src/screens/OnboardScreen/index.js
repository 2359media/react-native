import React from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import AppAction from '../../actions/AppAction';
import Screen from '../../components/Screen';
import ContentView from '../../components/ContentView';
import Button from '../../components/Button';
import styles from './styles';

const OnboardScreen = ({navigation}) => {
  const dispatch = useDispatch();

  function finishOnboard() {
    dispatch(AppAction.setFirstTime(false));
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  }

  return (
    <Screen>
      <ContentView style={styles.contentView}>
        <Text style={styles.h1}>Welcome to{'\n'}2359 React Native</Text>
        <Button
          testID="finishButton"
          text="Goto login screen"
          onPress={finishOnboard}
        />
      </ContentView>
    </Screen>
  );
};

export default OnboardScreen;
