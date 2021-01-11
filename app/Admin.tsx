import React, { FC, useCallback, useLayoutEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from './assets/colors';
import { GlobalStyles } from './assets/global-styles';
import { RnButton } from './components/RnButton';
import { selectRestaurants } from './data/restaurantsSlice';
import { Restaurant } from './models';
import { NavPropsFor } from './routes';

const listStyles = StyleSheet.create({
  list: {
    backgroundColor: Colors.background,
  },
});

type AdminProps = {} & NavPropsFor<'Admin'>;
export const Admin: FC<AdminProps> = (props) => {
  const restaurants = useSelector(selectRestaurants);

  const handleAdd = useCallback(() => {}, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Button color={Colors.light} title="Add" onPress={handleAdd} />,
    });
  }, [props.navigation, handleAdd]);

  return (
    <FlatList
      style={listStyles.list}
      data={restaurants}
      renderItem={(item) => <RemovableRestaurant restaurant={item.item} />}
    />
  );
};

const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: Colors.background,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  label: {
    flex: 1,
    color: Colors.light,
    fontSize: 16,
  },
});
const RemovableRestaurant: FC<{ restaurant: Restaurant }> = (props) => {
  return (
    <View style={rowStyles.container}>
      <Text style={rowStyles.label}>{props.restaurant.name}</Text>
      <RnButton text="remove" />
    </View>
  );
};
