import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {useRequest} from '../../utils/apiUtils';
import AppAction from '../../actions/AppAction';
import AccountApi from '../../apis/AccountApi';
import Screen from '../../components/Screen';
import TopNavigation from '../../components/TopNavigation';
import ContentView from '../../components/ContentView';
import Button from '../../components/Button';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('john');
  const [password, setPassword] = useState('1234');
  const request = useRequest();
  const dispatch = useDispatch();

  function login() {
    request(AccountApi.login(username, password), {
      showLoading: true,
      showError: true,
    }).then(d => {
      dispatch(AppAction.setToken(d.data.token));
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    });
  }

  return (
    <Screen>
      <TopNavigation title="Login" />
      <ContentView>
        <TextInput
          placeholder="username"
          style={styles.input}
          textContentType="username"
          testID="userInput"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="password"
          style={styles.input}
          textContentType="password"
          secureTextEntry
          testID="passInput"
          value={password}
          onChangeText={setPassword}
        />
        <Button testID="loginButton" text="Login" onPress={login} />
      </ContentView>
    </Screen>
  );
};

export default LoginScreen;
