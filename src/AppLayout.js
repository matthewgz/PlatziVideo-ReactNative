import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Home from './screens/containers/home';
import Header from './sections/components/Header';
import SuggestionList from './videos/containers/SuggestionsList';
import CategoryList from './videos/containers/CategoryList';
import API from '../utils/api';
import Movie from './screens/containers/Movie';
import Search from './sections/containers/Search';

const AppLayout = ({ dispatch, selectedMovie }) => {
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

  if (selectedMovie) {
    return <Movie />;
  }
  return (
    <Home>
      <Header />
      <Search />
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(AppLayout);
