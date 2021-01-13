import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const GlobalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  debug: {
    borderColor: 'red',
    borderWidth: 1,
  },
  heading: {
    fontSize: 18,
    color: Colors.light,
    textAlign: 'center',
    marginBottom: 8,
  },
});
