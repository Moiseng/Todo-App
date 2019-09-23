import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from "../styles/style";

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}/>
        </View>
    )
};

export default InputBar;