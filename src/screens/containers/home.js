import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';

import Header from '../../sections/components/Header';
import SuggestionList from '../../videos/containers/SuggestionsList';
import CategoryList from '../../videos/containers/CategoryList';
import API from '../../../utils/api';
import Search from '../../sections/containers/Search';

const Home = ({ dispatch, navigation }) => {
  useEffect(() => {
    const focus = navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    });

    return () => {
      focus.remove();
    };
  }, []);

  useEffect(() => {
    (async function getMovies() {
      const categoryList = await API.getMovies();
      dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {
          categoryList
        }
      });
      const suggestionList = await API.getSuggestion(10);
      dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {
          suggestionList
        }
      });
    })();

    return () => {};
  }, []);

  return (
    <>
      <Search />
      <CategoryList />
      <SuggestionList />
    </>
  );
};

Home.navigationOptions = () => {
  return {
    header: Header
  };
};

export default connect(null)(Home);
