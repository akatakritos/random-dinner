import React, { FC } from 'react';
import { View } from 'react-native';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../assets/colors';
import { GlobalStyles } from '../assets/global-styles';

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    backgroundColor: Colors.success,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

export const RnButtonBar: FC<{}> = (props) => {
  return <View style={styles.buttonBar}>{props.children}</View>;
};

type RnButtonProps = {
  type?: 'primary' | 'secondary';
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const RnButton: FC<RnButtonProps> = (props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
