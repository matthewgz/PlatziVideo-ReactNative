import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage';

import reducer from './reducers/index';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: []
// });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, reducer);

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigation
);

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
);
const persistor = persistStore(store);

export { store, persistor };
