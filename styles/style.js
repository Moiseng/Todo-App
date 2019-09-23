import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusbar: {
        backgroundColor: '#FFCE00',
        height: 20
    },
    header: {
        backgroundColor: '#171717',
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        color: '#F3F3F3',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {width: 0, height: 3},
        shadowColor: '#171717',
        shadowOpacity: .1,
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35,
    },
    addButton: {
        backgroundColor: '#FFCE00',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700',
    },
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
    }
});