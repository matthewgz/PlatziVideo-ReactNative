import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import API from '../../../utils/api';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const Search = ({ dispatch }) => {
  const [state, setState] = useState({ text: '' });

  const handleSubmit = async () => {
    const movies = await API.searchMovie(state.text);
    console.log(movies);
    if (movies) {
      dispatch({
        type: 'SET_SELECTED_MOVIE',
        payload: {
          movie: movies[0]
        }
      });
      dispatch(
        NavigationActions.navigate({
          routeName: 'Movie'
        })
      );
    }
  };
  const handleChangeText = text => {
    setState({ text });
  };
  return (
    <TextInput
      placeholder="Busca tu pelicula favorita"
      autoCorrect={false}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      onSubmitEditing={handleSubmit}
      onChangeText={handleChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
});

export default connect(null)(Search);
