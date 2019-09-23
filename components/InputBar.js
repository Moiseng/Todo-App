import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from "../styles/style";

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value={props.todoInput}
            />
            <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
                <Text style={styles.addButtonText}>Ajouter</Text>
            </TouchableOpacity>
        </View>
    )
};

export default InputBar;