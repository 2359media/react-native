import React from 'react';
import Screen from '../../components/Screen';
import ContentView from '../../components/ContentView';
import TopNavigation from '../../components/TopNavigation';

const ModalScreen = () => {
  return (
    <Screen>
      <TopNavigation modal title="Modal" />
      <ContentView />
    </Screen>
  );
};

export default ModalScreen;
