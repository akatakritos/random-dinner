import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from './assets/colors';
import { GlobalStyles } from './assets/global-styles';
import { Layout } from './components/Layout';
import { RnButton, RnButtonBar } from './components/RnButton';
import { restaurantChosen, selectLastChosen, selectRestaurants } from './data/restaurantsSlice';
import { Restaurant } from './models';
import { NavPropsFor } from './routes';

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

function pickRandom(items: Restaurant[], lastSelected?: string) {
  if (!items) return undefined;
  if (items.length === 0) return undefined;
  if (items.length === 1) return items[0];

  let selected;
  do {
    selected = items[Math.floor(Math.random() * items.length)];
  } while (selected.id === lastSelected);

  return selected;
}

type HomeProps = {} & NavPropsFor<'Home'>;
export const Home: FC<HomeProps> = (props) => {
  const restaurants = useSelector(selectRestaurants);
  const dispatch = useDispatch();
  const chosen = useSelector(selectLastChosen);

  const pickAgain = () => {
    const id = pickRandom(restaurants, chosen?.id)?.id;
    if (id) dispatch(restaurantChosen({ id }));
  };

  useEffect(() => pickAgain(), []);

  return (
    <View style={[styles.background]}>
      <View style={styles.container}>
        <Text style={styles.result}>{chosen?.name}</Text>
      </View>
      <RnButtonBar>
        <RnButton text="Don't want it, try another" onPress={pickAgain} />
      </RnButtonBar>
      <RnButtonBar>
        <RnButton text="Admin" onPress={() => props.navigation.navigate('Admin')} type="secondary" />
      </RnButtonBar>
    </View>
  );
};
