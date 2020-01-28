import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TimeLeft = ({ currentTime, duration }) => {
  return (
    <View>
      <Text style={styles.timer}>
        {currentTime}/{duration}
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
