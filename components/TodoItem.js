import React from 'react';
import {Text,Button, TouchableOpacity} from 'react-native';
import {styles} from "../styles/style";

export default class TodoItem extends React.Component{
    constructor (props) {
        super(props)
    }

    render() {
        const todoItem = this.props.todoItem;

        return (
            <TouchableOpacity
                style={styles.todoItem}
                onPress={() => this.props.toggleDone()}
            >
                <Text style={(todoItem.done) ? {color: '#AAAAAA'} : {color: '#313131'}}>
                    {todoItem.title}
                </Text>

                <Button
                    title="Supprimer"
                    color={(todoItem.done) ? 'rgba(200,0,0,0.5)' : 'rgba(255,0,0,1)'}
                    onPress={() => this.props.removeTodo()}
                />
            </TouchableOpacity>
        );
    }
}