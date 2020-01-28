import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';
import { connect } from 'react-redux';

class SuggestionsList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :C" />;
  itemSeparator = () => <Separator />;
  viewMovie = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    });
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
      <Layout title="Recomendado para ti">
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
    list: state.suggestionList
  };
};

export default connect(mapStateToProps)(SuggestionsList);
