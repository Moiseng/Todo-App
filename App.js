import React from 'react';
import * as Font from 'expo-font';
import lodash from 'lodash';
import {Text, View, Platform, FlatList } from 'react-native';
import {styles} from "./styles/style";
import TodoItem from './components/TodoItem';
import ButtonAdd from './components/button-add-task/index'
import TextPrompt from './components/text-prompt/index';
import MenuTask from './components/modals/menu-task';
import {Status} from "./components/task-model/index";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      header: 'Task-List',
      todos: [
        {
          id: 0,
          title: 'Take out the trash',
          todo: Status.todo,
        },
        {
          id: 1,
          title: 'Acheter du pain',
          todo: Status.done,
        }
      ],
      isAddPromptVisible: false,
      isMenuTaskVisible: false,
      isRenamePromptVisible: false,
      currentTask: {},
      fontLoaded: false,
    }
  }

  async componentDidMount()
  {
    await Font.loadAsync({
      'Billabong': require('./assets/fonts/Billabong.ttf')
    });
    this.setState({fontLoaded: true})
  }

  /*= function pour afficher et cacher la modal =*/
  toggleMenuTaskVisibility (item) {
    let currentTask = item;

    if (this.state.isMenuTaskVisible){
      currentTask = {};
    }
    this.setState({
      isMenuTaskVisible: !this.state.isMenuTaskVisible,
      currentTask
    })
  };

  /*= function pour ajouter une tâche =*/
  addNewTodo = (value) => {
    /*= recupere mon tableau 'todos ' =*/
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length +1,
      title: value,
      todo: Status.todo,
    });

    this.setState({
      todos,
      isAddPromptVisible: false
    })
  };


  /*= function pour changer le statut de la tâche =*/
  changeStatus = () => {
    const updatedTask = this.state.currentTask;
    const updatedStatus = this.state.currentTask.todo === Status.done ? Status.todo : Status.done;
    updatedTask.todo = updatedStatus;
    const index = lodash.findIndex(this.state.todos, {
      id: this.state.currentTask.id
    });
    const taskListToUpdate = this.state.todos;
    taskListToUpdate[index] = updatedTask;
    this.setState({ todos: taskListToUpdate, currentTask: {}, isMenuTaskVisible: false });
  };

  /*= function pour supprimer une tâche =*/
  deleteTask = (index) => {
    this.setState(({todos}) => {
      const toDelete = [...todos];
      toDelete.splice(index,1);
      return { todos:toDelete}
    }, () => {
      this.toggleMenuTaskVisibility()
    })
  };

  /*= Function pour renomer la tâche =*/
  renameTask = value => {
    const updatedTask = this.state.currentTask;
    updatedTask.title = value;

    const index = lodash.findIndex(this.state.todos, {
      id: this.state.currentTask.id
    });
    const updatedTaskList = this.state.todos;
    updatedTaskList[index] = updatedTask;

    this.setState({ todos: updatedTaskList }, () => {
      this.hideRenamePrompt();
    });
  };

  /*= hide rename modal =*/
  hideRenamePrompt = () => {
    this.setState({isRenamePromptVisible: false})
  };

  /*= au click du button, afficher le prompt pour ajouter une tâche =*/
  displayAddTask = () => {
    this.setState({isAddPromptVisible: true})
  };


  displayRename = task => {
    this.setState({currentTask: task, isRenamePromptVisible: true})
  };

  /*= au click du button Cancel, cacher le prompt =*/
  hidePrompt = () => {
    this.setState({isAddPromptVisible: false, currentTask: {}})
  };


  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
        <View style={styles.container}>
          {statusbar}
          <View style={styles.header}>
            {
              this.state.fontLoaded ? (
                  <Text style={{fontFamily: 'Billabong',color: '#F3F3F3',
                    fontSize: 46,
                    textTransform: 'uppercase',}}>{this.state.header}</Text>
              ) : null
            }
          </View>
          <FlatList
              data={this.state.todos}
              extraData={this.state}
              keyExtractor={(item,index) => index.toString()}
              renderItem={({item,index}) => {
                return(
                    <TodoItem
                        todoItem={item}
                        toggleMenuTaskVisibility={() => this.toggleMenuTaskVisibility(item)}
                        displayRename={() => this.displayRename(item)}
                    />
                )
              }}
          />
          <MenuTask
              isVisible={this.state.isMenuTaskVisible}
              onDeleCallBack={() => this.deleteTask()}
              onChangeStatus={() => this.changeStatus()}
              onDisapearCallBack={() => this.toggleMenuTaskVisibility()}
          />
          <TextPrompt
              isVisible={this.state.isAddPromptVisible}
              title="Ajouter une tâche"
              placeholder="Ex: Acheter du riz"
              defaultValue={""}
              onSubmitCallBack={(value) => this.addNewTodo(value)}
              onCancelCallBack={() => this.hidePrompt()}
          />
          <TextPrompt
              isVisible={this.state.isRenamePromptVisible}
              title="Renomer la tache"
              placeholder="Ex: Acheter du riz"
              defaultValue={this.state.currentTask.title}
              onSubmitCallBack={(value) => this.renameTask(value)}
              onCancelCallBack={() => this.hideRenamePrompt()}
          />
          <ButtonAdd
              onPressCallBack={() => this.displayAddTask()}
          />
        </View>
    )
  }
}