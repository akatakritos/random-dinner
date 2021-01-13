import React, { FC } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Colors } from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 8,
    flex: 1,
  },
});

type FormModalProps = {
  onHardwareClose?: () => void;
  visible: boolean;
};
export const FormModal: FC<FormModalProps> = (props) => {
  return (
    <Modal
      animationType="slide"
      presentationStyle="formSheet"
      visible={props.visible}
      onRequestClose={props.onHardwareClose}
    >
      <View style={styles.container}>{props.children}</View>
    </Modal>
  );
};
