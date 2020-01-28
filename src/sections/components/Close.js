import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Close = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    color: 'white'
  },
  container: {
    backgroundColor: '#14b739',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Close;
