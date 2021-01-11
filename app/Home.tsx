import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './assets/colors';
import { GlobalStyles } from './assets/global-styles';
import { Layout } from './components/Layout';
import { RnButton, RnButtonBar } from './components/RnButton';

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    color: Colors.light,
    fontSize: 48,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export const Home: FC<{}> = (props) => {
  return (
    <View style={[styles.background]}>
      <View style={styles.container}>
        <Text style={styles.result}>Restaurant</Text>
      </View>
      <RnButtonBar>
        <RnButton text="Don't want it, try another" />
      </RnButtonBar>
    </View>
  );
};
