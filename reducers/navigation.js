import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../src/App-Navigator';

const NavigationReducer = createNavigationReducer(AppNavigator);

export default NavigationReducer;
