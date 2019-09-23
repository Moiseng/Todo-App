import React from 'react';
import {Text, View, Platform } from 'react-native';
import {styles} from "./styles/style";
import Header from './components/Header';
import InputBar from './components/InputBar';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoInput: '',
      todo: [
        {
          id: 0,
          title: 'Take out the trash',
          done: false
        },
        {
          id: 1,
          title: 'Acheter du pain',
          done: false,
        }
      ]
    }
  }

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
        <View style={styles.container}>
          {statusbar}
          <Header
            title="Hello"
          />
          <InputBar/>
        </View>
    )
  }
}