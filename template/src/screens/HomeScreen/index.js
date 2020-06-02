import React from 'react';
import {RefreshControl, View, Text, TouchableHighlight} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import Screen from '../../components/Screen';
import ContentView from '../../components/ContentView';
import TopNavigation from '../../components/TopNavigation';
import Button from '../../components/Button';
import EmptyView from '../../components/EmptyView';
import {useTodosState, useLogout} from './hooks';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const safeArea = useSafeArea();
  const {loading, refreshing, error, todos, reload} = useTodosState();
  const logout = useLogout();

  function gotoNextScreen(id) {
    navigation.navigate('Details', {id});
  }

  return (
    <Screen>
      <TopNavigation
        title="Home"
        rightButtons={
          <Button
            testID="logoutButton"
            type="barItem"
            icon="logout"
            onPress={logout}
          />
        }
      />
      {todos.length > 0 ? (
        <ContentView
          testID="contentView"
          data={todos}
          renderItem={({item: {id, title}}) => (
            <TouchableHighlight
              testID={`item::${id}`}
              underlayColor="#999"
              onPress={() => gotoNextScreen(id)}>
              <View style={styles.item(safeArea)}>
                <Text style={styles.itemText}>{title}</Text>
              </View>
            </TouchableHighlight>
          )}
          refreshControl={
            <RefreshControl
              testID="refreshControl"
              refreshing={refreshing}
              onRefresh={reload}
            />
          }
        />
      ) : (
        <EmptyView
          testID="emptyView"
          loading={loading}
          onReload={reload}
          text={
            error ||
            (loading && 'Loading...') ||
            "You don't have anything to do"
          }
        />
      )}
    </Screen>
  );
};

export default HomeScreen;
