import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyA8gYGF7OmSbk558tr8CuoQ8q123Kvbpk8",
    authDomain: "manager-e03c2.firebaseapp.com",
    databaseURL: "https://manager-e03c2.firebaseio.com",
    projectId: "manager-e03c2",
    storageBucket: "",
    messagingSenderId: "405248792611"
  });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
