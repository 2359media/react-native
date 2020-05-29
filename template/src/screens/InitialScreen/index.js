import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Screen from '../../components/Screen';

const InitialScreen = ({navigation}) => {
  const {firstTime, token} = useSelector(s => s.app);

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{name: firstTime ? 'Onboard' : token ? 'Home' : 'Login'}],
    });
  });

  return <Screen />;
};

export default InitialScreen;
