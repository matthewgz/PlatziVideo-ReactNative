import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../videos/components/VerticalSeparator';
import Suggestion from '../../videos/components/Suggestion';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Category extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :C" />;
  itemSeparator = () => <Separator />;
  viewMovie = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    });
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    );
  };
  renderItem = ({ item }) => {
    return (
      <Suggestion
        {...item}
        onPress={() => {
          this.viewMovie(item);
        }}
      />
    );
  };
  keyExtractor = item => item.id.toString();

  render() {
    return (
      <Layout title={`${this.props.navigation.getParam('genre', 'Categoria')}`}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.videos.categoryList
  };
};

export default connect(mapStateToProps)(Category);
