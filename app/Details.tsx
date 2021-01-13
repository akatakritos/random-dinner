import { forScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './assets/colors';
import { GlobalStyles } from './assets/global-styles';
import { FormField } from './components/FormField';
import { RnButton, RnButtonBar } from './components/RnButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 8,
  },
});

export const EmptyRestaurantData = {
  name: '',
};

export type RestaurantData = typeof EmptyRestaurantData;

type DetailsProps = {
  model: RestaurantData;
  onModelChange: (model: RestaurantData) => void;
  onCancel?: () => void;
  onSave?: () => void;
};

export const Details: FC<DetailsProps> = (props) => {
  function setModel<Key extends keyof RestaurantData>(key: Key, value: RestaurantData[Key]) {
    const model = { ...props.model, [key]: value };
    props.onModelChange(model);
  }

  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.heading}>Restaurant Details</Text>

      <View style={{ flex: 1 }}>
        <FormField
          label="Restaurant Name"
          value={props.model.name}
          onValueChange={(value) => setModel('name', value)}
        />
      </View>

      <RnButtonBar>
        <RnButton text="Save" onPress={props.onSave} />
      </RnButtonBar>
      <RnButtonBar>
        <RnButton text="Cancel" type="secondary" onPress={props.onCancel} />
      </RnButtonBar>
    </View>
  );
};
