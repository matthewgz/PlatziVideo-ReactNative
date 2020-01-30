import { combineReducers } from 'redux';
import Navigation from './navigation';
import Videos from './Videos';
import User from './User';

const Reducer = combineReducers({
  videos: Videos,
  navigation: Navigation,
  user: User
});

export default Reducer;
