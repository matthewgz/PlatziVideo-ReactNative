import React, { useState, useEffect } from 'react';
import Layout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

const Movie = ({ dispatch, movie }) => {
  const [state] = useState({ opacity: new Animated.Value(0) });

  useEffect(() => {
    Animated.timing(state.opacity, {
      toValue: 1,
      duration: 1200
    }).start();
    return () => {};
  }, []);

  const closeVideo = () => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    });
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: state.opacity
      }}>
      <Layout>
        <Player />
        <Details {...movie} />
      </Layout>
    </Animated.View>
  );
};

Movie.navigationOptions = ({ navigation }) => {
  return {
    header: () => (
      <Header>
        <Close
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Header>
    )
  };
};

const mapStateToProps = state => {
  return {
    movie: state.videos.selectedMovie
  };
};

export default connect(mapStateToProps)(Movie);
