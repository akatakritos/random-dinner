import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from '../assets/colors';

const styles = StyleSheet.create({
  label: {
    color: Colors.light,
    fontSize: 16,
  },
  input: {
    backgroundColor: Colors.inputBackground,
    color: Colors.light,
    padding: 8,
    fontSize: 16,
  },
});

type FormFieldProps = {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  autoFocus?: boolean;
};
export const FormField: FC<FormFieldProps> = (props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onValueChange}
        value={props.value}
        autoFocus={props.autoFocus}
      />
    </View>
  );
};
