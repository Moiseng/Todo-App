import React from 'react';
import {View,Text,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Button} from "react-native-elements";
import Modal from 'react-native-modal';
import {styles} from "../../styles/style";


const MenuTask = ({isVisible, onDisapearCallBack, onDeleCallBack,onChangeStatus}) => (
    <Modal
        isVisible={isVisible}
        animationIn={"zoomInDown"}
        animationOut={"zoomOutUp"}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        customBackdrop={
            <TouchableWithoutFeedback onPress={() => onDisapearCallBack()}>
                <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0.5)'}}></View>
            </TouchableWithoutFeedback>
        }
    >
        <TouchableWithoutFeedback>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={{fontSize: 20, fontWeight: '900'}}>{`Que souhaitez vous\n faire sur la tâche ?`}</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button
                        buttonStyle={styles.buttonChangeStatus}
                        title="Changer-statut"
                        onPress={() => onChangeStatus()}
                    />
                    <Button
                        buttonStyle={styles.buttonDelete}
                        title="Supprimer"
                        onPress={() => onDeleCallBack()}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
);

export default MenuTask;