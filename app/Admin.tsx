import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import { Animated, Button, FlatList, Modal, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from './assets/colors';
import { FormModal } from './components/FormModal';
import { RnButton } from './components/RnButton';
import { restaurantAdded, restaurantRemoved, selectRestaurants } from './data/restaurantsSlice';
import { Details, EmptyRestaurantData, RestaurantData } from './Details';
import { Restaurant } from './models';
import { NavPropsFor } from './routes';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

const listStyles = StyleSheet.create({
  list: {
    backgroundColor: Colors.background,
  },
});

type AdminProps = {} & NavPropsFor<'Admin'>;
export const Admin: FC<AdminProps> = (props) => {
  const restaurants = useSelector(selectRestaurants);
  const dispatch = useDispatch();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [model, setModel] = useState(EmptyRestaurantData);

  const handleAdd = useCallback(() => {
    setDetailsOpen(true);
  }, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Button color={Colors.light} title="Add" onPress={handleAdd} />,
    });
  }, [props.navigation, handleAdd]);

  const remove = (restaurant: Restaurant) => dispatch(restaurantRemoved({ id: restaurant.id }));
  const handleSave = () => {
    dispatch(restaurantAdded(model));
    setDetailsOpen(false);
    setModel(EmptyRestaurantData);
  };

  return (
    <>
      <FlatList
        style={listStyles.list}
        data={restaurants}
        renderItem={(item) => <RemovableRestaurant restaurant={item.item} onRemove={remove} />}
      />
      <FormModal visible={detailsOpen} onHardwareClose={() => setDetailsOpen(false)}>
        <Details model={model} onModelChange={setModel} onCancel={() => setDetailsOpen(false)} onSave={handleSave} />
      </FormModal>
    </>
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
  deleteButton: {
    backgroundColor: Colors.danger,
  },
  deleteButtonText: {},
});
const RemovableRestaurant: FC<{ restaurant: Restaurant; onRemove: (restaurant: Restaurant) => void }> = (props) => {
  const renderLeftActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={rowStyles.deleteButton} onPress={() => props.onRemove(props.restaurant)}>
        <Animated.Text style={[rowStyles.deleteButtonText]}>(x)</Animated.Text>
      </RectButton>
    );
  };

  return (
    <Swipeable renderRightActions={renderLeftActions}>
      <View style={rowStyles.container}>
        <Text style={rowStyles.label}>{props.restaurant.name}</Text>
      </View>
    </Swipeable>
  );
};
