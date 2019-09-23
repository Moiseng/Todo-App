import React from 'react';
import {Text, View, Platform, FlatList } from 'react-native';
import {styles} from "./styles/style";
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoInput: '',
      todos: [
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

  addNewTodo ()  {
    /*= recupere mon tableau 'todos ' =*/
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length +1,
      title: this.state.todoInput,
      done: false,
    });

    this.setState({
      todos,
      todoInput: '',
    })
  }

  toggleDone (item){
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo
    });

    this.setState({
      todos,
    })
  }

  /*== function de suppression ==*/
  removeTodo(item) {
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id);

    this.setState({todos});
  }

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
        <View style={styles.container}>
          {statusbar}
          <Header
            title="Hello"
          />
          <InputBar
              textChange={todoInput => this.setState({todoInput})}
              addNewTodo={() => this.addNewTodo()}
              todoInput={this.state.todoInput}
          />

          <FlatList
            data={this.state.todos}
            extraData={this.state}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index}) => {
              return(
                  <TodoItem
                    todoItem={item}
                    toggleDone={() => this.toggleDone(item)}
                    removeTodo={() => this.removeTodo(item)}
                  />
              )
            }}
          />
        </View>
    )
  }
}