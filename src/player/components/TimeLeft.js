import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TimeLeft = ({ currentTime, duration }) => {
  return (
    <View>
      <Text style={styles.timer}>
        {currentTime ? currentTime.toString().replace('.', ':') : '0:00'}/
        {duration ? duration.toString().replace('.', ':') : '0:00'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default TimeLeft;
