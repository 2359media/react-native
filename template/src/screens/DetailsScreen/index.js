import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import Screen from '../../components/Screen';
import ContentView from '../../components/ContentView';
import TopNavigation from '../../components/TopNavigation';
import Button from '../../components/Button';
import styles from './styles';

const DetailsScreen = ({route, navigation}) => {
  const {title, body} = useSelector(s =>
    s.todo.all.find(t => t.id === route.params.id),
  );

  function gotoModalScreen() {
    navigation.navigate('Modal');
  }

  return (
    <Screen>
      <TopNavigation title="Details" />
      <ContentView>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        <Button
          testID="modalButton"
          style={styles.div}
          text="Goto modal screen"
          onPress={gotoModalScreen}
        />
      </ContentView>
    </Screen>
  );
};

export default DetailsScreen;
