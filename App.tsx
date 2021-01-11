/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Layout } from './app/components/Layout';
import { initializeList } from './app/data/restaurantsSlice';
import { rootStore } from './app/data/rootStore';
import { Home } from './app/Home';
import { RouteParams } from './app/routes';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator<RouteParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={rootStore}>
        <Initializer />
      </Provider>
    </NavigationContainer>
  );
};

const Initializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeList());
  }, [dispatch]);

  return (
    <Layout>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Layout>
  );
};

export default App;
