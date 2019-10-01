import React from 'react';
import {StyleSheet} from "react-native";

function elevationShadowStyle(elevation){
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.8 * elevation },
        shadowOpacity: 0.5,
        shadowRadius: 1 * elevation
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusbar: {
        backgroundColor: '#FFEC00',
        height: 20
    },
    header: {
        backgroundColor: '#171717',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        ...elevationShadowStyle(10)
    },
    title: {
        color: '#F3F3F3',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
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
        paddingRight: 10,
        paddingTop: 5,
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
    buttonAdd: {
        color: '#544D69'
    },
    modal: {
        backgroundColor: '#fff',
        height: 200,
        justifyContent: 'space-around',
        borderRadius: 40,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDelete: {
        backgroundColor: 'red',
        borderRadius: 60,
        marginRight: 5,
        marginLeft: 20,
        width: 120,
    },
    buttonChangeStatus: {
        backgroundColor: '#50BFC1',
        borderRadius: 60,
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});