import React from 'react';
import { StyleSheet, ProgressBarAndroid } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarAndroid
      color="white"
      indeterminate={false}
      styleAttr="Horizontal"
      progress={progress}
      style={styles.progressBarAndroid}
    />
  );
};
const styles = StyleSheet.create({
  progressBarAndroid: {
    width: '50%'
  }
});
export default ProgressBar;
