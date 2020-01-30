import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import IconProfile from 'react-native-vector-icons/AntDesign';

class Profile extends Component {
  static navigationOptions = () => {
    return {
      title: 'Perfil',
      tabBarIcon: <IconProfile name="profile" size={25} color="#F5ECEB" />,
      drawerIcon: <IconProfile name="profile" size={25} color="#F5ECEB" />
    };
  };

  componentDidMount() {
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    });
  }

  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER'
    });
    this.props.navigation.navigate('Loading');
  };

  componentWillUnmount() {
    this.focus.remove();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.user.username}</Text>
        <Button
          title="Cerrar sesión"
          color="#67a52e"
          onPress={this.handleLogout}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
