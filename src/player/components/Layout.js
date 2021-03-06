import React from 'react';
import { View, StyleSheet } from 'react-native';

const Layout = ({ children, loader, loading, controls }) => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{children}</View>
      <View style={styles.overlay}>{loading && loader}</View>
      {controls}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%'
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Layout;
