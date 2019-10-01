import React from 'react';
import ActionButton from 'react-native-action-button';
import {Icon} from "react-native-elements";
import {styles} from "../../styles/style";

function elevationShadowStyle(elevation){
    return {
        elevation,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 1 * elevation },
        shadowOpacity: 2,
        shadowRadius: 1 * elevation
    }
}

const ButtonAdd =({onPressCallBack}) => (
    <ActionButton buttonColor={'#544D69'} onPress={() => onPressCallBack()} shadowStyle={elevationShadowStyle(10)}>
        <Icon color={styles.buttonAdd} name={"add"}/>
    </ActionButton>
);

export default ButtonAdd;