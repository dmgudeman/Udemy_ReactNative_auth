
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4pPNa9aTvDWJA1Wd7VA8-MOzY_m3w9hA',
      authDomain: 'authentication-aad36.firebaseapp.com',
      databaseURL: 'https://authentication-aad36.firebaseio.com',
      projectId: 'authentication-aad36',
      storageBucket: 'authentication-aad36.appspot.com',
      messagingSenderId: '110602444455'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
