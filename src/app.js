
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4pPNa9aTvDWJA1Wd7VA8-MOzY_m3w9hA',
      authDomain: 'authentication-aad36.firebaseapp.com',
      databaseURL: 'https://authentication-aad36.firebaseio.com',
      projectId: 'authentication-aad36',
      storageBucket: 'authentication-aad36.appspot.com',
      messagingSenderId: '110602444455'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false })
      };
    });
  };

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button> 
        )     
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  };
}

export default App;
