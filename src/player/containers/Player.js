import React, { useState, useRef } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';
import ControlLayout from '../components/ControlLayout';
import PlayPausa from '../components/PlayPausa';
import ProgressBar from '../components/ProgressBar';
import TimeLeft from '../components/TimeLeft';
import FullScreen from '../components/FullScreen';

const Player = () => {
  const [state, setState] = useState({
    loading: true,
    paused: false,
    fullScreen: false,
    progress: 0.0,
    duration: 0.0,
    currentTime: 0.0,
    volume: 0,
    muted: true
  });
  const video = useRef(null);

  const onBuffer = ({ isBuffering }) => {
    setState({ loading: isBuffering });
  };

  const onLoad = () => {
    setState({ loading: false });
  };

  const playPause = () => {
    setState({ paused: !state.paused });
  };

  const onProgress = playload => {
    let currentTime = playload.currentTime / 60; //tiempo transcurrido en minutos
    let minutes = Math.floor(currentTime); //tiempo transcurrido sin decimales
    let seconds = currentTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
    let duration = (playload.seekableDuration / 60).toFixed(2); //seekableDuration: duracion de todo el video
    setState({
      currentTime: time,
      progress: playload.currentTime / playload.seekableDuration,
      duration: duration
    });
  };

  const onFullScreen = () => {
    state.fullScreen
      ? video.current.dismissFullscreenPlayer()
      : video.current.presentFullscreenPlayer(); //esto no funciona del todo bien

    setState({ fullScreen: !state.fullScreen });
  };

  return (
    <Layout
      loading={state.loading}
      loader={<ActivityIndicator color="red" />}
      controls={
        <ControlLayout>
          <PlayPausa onPress={playPause} paused={state.paused} />
          <ProgressBar progress={state.progress} />
          <TimeLeft duration={state.duration} currentTime={state.currentTime} />
          <FullScreen fullScreen={state.fullScreen} onPress={onFullScreen} />
        </ControlLayout>
      }>
      <Video
        source={{
          // uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
          uri: 'https://clips-media-assets2.twitch.tv/AT-cm%7C256383487.mp4'
        }}
        style={styles.video}
        resizeMode="contain"
        onBuffer={onBuffer}
        onLoad={onLoad}
        paused={state.paused}
        onProgress={onProgress}
        ref={video}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
    // transform: [{ rotate: '90deg' }]
  }
});

export default Player;
