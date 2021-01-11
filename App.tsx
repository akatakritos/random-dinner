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
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import { Header, LearnMoreLinks, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { Colors } from './app/assets/colors';
import { Layout } from './app/components/Layout';
import { Home } from './app/Home';
import { RouteParams } from './app/routes';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator<RouteParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Layout>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  );
};

export default App;
