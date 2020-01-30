import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './screens/containers/home';
import Movie from './screens/containers/Movie';
import About from './screens/containers/About';
import Lucky from './screens/containers/Lucky';
import Profile from './screens/containers/Profile';
import Category from './screens/containers/Category';
import Login from './screens/containers/Login';
import Loading from './screens/containers/Loading';
import Header from './sections/components/Header';
// import Icon from './sections/components/Icon';
import IconHome from 'react-native-vector-icons/FontAwesome';
import DrawerComponent from './sections/components/Drawer';

const Main = createStackNavigator(
  {
    Home: Home,
    Category: Category
  },
  {
    defaultNavigationOptions: {
      header: Header,
      cardStyle: {
        backgroundColor: 'white'
      }
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <IconHome name="home" size={25} color="#F5ECEB" />
      }
    },
    About: {
      screen: About
    },
    Lucky: {
      screen: Lucky
    },
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721'
    }
  }
);

const WithModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },
    Movie: {
      screen: Movie,
      navigationOptions: {
        cardStyle: {
          backgroundColor: 'white'
        },
        gestureEnabled: true
      }
    }
  },
  {
    modal: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.ModalSlideFromBottomIOS
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: WithModal,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: <IconHome name="home" size={25} color="#F5ECEB" />
      }
    },
    Sobre: {
      screen: About
    },
    Suerte: {
      screen: Lucky
    }
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    contentComponent: DrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#7aba2f',
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,.5)'
      },
      labelStyle: {
        marginHorizontal: 0
      },
      iconContainerStyle: {
        marginHorizontal: 5
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    App: DrawerNavigator,
    Login: Login,
    Loading: Loading
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(SwitchNavigator);
