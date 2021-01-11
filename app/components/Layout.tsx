import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/colors';

export const Layout: FC<{}> = (props) => {
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </View>
  );
};
