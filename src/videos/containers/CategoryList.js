import React from 'react';
import { FlatList } from 'react-native';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';
import Layout from '../components/CategoryListLayout';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const CategoryList = ({ list, dispatch }) => {
  const renderEmpty = () => <Empty text="No hay sugerencias :C" />;
  const itemSeparator = () => <Separator />;
  const viewCategory = item => {
    dispatch(
      NavigationActions.navigate({
        routeName: 'Category',
        params: {
          genre: item.genres[0]
        }
      })
    );
  };
  const renderItem = ({ item }) => {
    return (
      <Category
        {...item}
        onPress={() => {
          viewCategory(item);
        }}
      />
    );
  };
  const keyExtractor = item => item.id.toString();

  return (
    <Layout title="Categorías">
      <FlatList
        horizontal
        keyExtractor={keyExtractor}
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    list: state.videos.categoryList
  };
};

export default connect(mapStateToProps)(CategoryList);
