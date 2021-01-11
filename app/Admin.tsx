import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { GlobalStyles } from './assets/global-styles';
import { Restaurant } from './models';

export const Admin: FC<{}> = (props) => {
  return <FlatList />;
};

const RemovableRestaurant: FC<{ restaurant: Restaurant }> = (props) => {
  return (
    <View>
      <Text>{props.restaurant.name}</Text>
    </View>
  );
};
