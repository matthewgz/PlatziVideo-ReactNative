import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';
import Layout from '../components/CategoryListLayout';
import { connect } from 'react-redux';

const CategoryList = ({ list }) => {
  const renderEmpty = () => <Empty text="No hay sugerencias :C" />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({ item }) => {
    return <Category {...item} />;
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
    list: state.categoryList
  };
};

export default connect(mapStateToProps)(CategoryList);
