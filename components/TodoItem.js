import React from 'react';
import {Text,Button, TouchableOpacity} from 'react-native';
import {styles} from "../styles/style";
import {Badge} from "react-native-elements";

export default class TodoItem extends React.Component{
    constructor (props) {
        super(props);
    }

    render() {
        const todoItem = this.props.todoItem;

        return (
            <TouchableOpacity
                style={styles.todoItem}
                onPress={() => this.props.toggleMenuTaskVisibility()}
                onLongPress={() => this.props.displayRename()}
                /*onPress={() => this.props.changeStatus(this.props.todoItem)}*/
            >
                <Text>
                    {todoItem.title}
                </Text>

                <Badge
                    badgeStyle={{transform: [{scaleX: 1.1}, {scaleY: 1.1}], backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'}}
                    value={<Text style={{color: '#FFF', paddingLeft: 3, paddingRight: 3, paddingTop: 3, paddingBottom: 4}}>{todoItem.todo}</Text>}
                />
            </TouchableOpacity>
        );
    }
}