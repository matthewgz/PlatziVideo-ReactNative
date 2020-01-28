import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacitym,
  TouchableNativeFeedback,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayPausa = ({ onPress, paused }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="transparent"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5
      }}>
      <Text style={styles.button}>
        {paused ? (
          <Icon name="play" size={20} style={styles.button} />
        ) : (
          <Icon name="pause" size={20} style={styles.button} />
        )}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'white',
    // fontSize: 10,
    fontWeight: 'bold'
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: 'white'
    // backgroundColor: 'gray'
  }
});

export default PlayPausa;
