import React, { FC, useCallback, useLayoutEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from './assets/colors';
import { GlobalStyles } from './assets/global-styles';
import { RnButton } from './components/RnButton';
import { restaurantRemoved, selectRestaurants } from './data/restaurantsSlice';
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
  const dispatch = useDispatch();

  const handleAdd = useCallback(() => {}, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Button color={Colors.light} title="Add" onPress={handleAdd} />,
    });
  }, [props.navigation, handleAdd]);

  const remove = (restaurant: Restaurant) => dispatch(restaurantRemoved({ id: restaurant.id }));

  return (
    <FlatList
      style={listStyles.list}
      data={restaurants}
      renderItem={(item) => <RemovableRestaurant restaurant={item.item} onRemove={remove} />}
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
    padding: 4,
  },
  label: {
    flex: 1,
    color: Colors.light,
    fontSize: 16,
  },
});
const RemovableRestaurant: FC<{ restaurant: Restaurant; onRemove: (restaurant: Restaurant) => void }> = (props) => {
  return (
    <View style={rowStyles.container}>
      <Text style={rowStyles.label}>{props.restaurant.name}</Text>
      <RnButton text="remove" onPress={() => props.onRemove(props.restaurant)} />
    </View>
  );
};
