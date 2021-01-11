import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Colors } from './assets/colors';
import { GlobalStyles } from './assets/global-styles';
import { Layout } from './components/Layout';
import { RnButton, RnButtonBar } from './components/RnButton';
import { selectRestaurants } from './data/restaurantsSlice';

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

function pickRandom<T>(items: T[]) {
  if (!items) return undefined;
  return items[Math.floor(Math.random() * items.length)];
}

export const Home: FC<{}> = (props) => {
  const restaurants = useSelector(selectRestaurants);
  const [chosen, setChosen] = useState(pickRandom(restaurants));

  const pickAgain = () => setChosen(pickRandom(restaurants));

  return (
    <View style={[styles.background]}>
      <View style={styles.container}>
        <Text style={styles.result}>{chosen?.name}</Text>
      </View>
      <RnButtonBar>
        <RnButton text="Don't want it, try another" onPress={pickAgain} />
      </RnButtonBar>
    </View>
  );
};
