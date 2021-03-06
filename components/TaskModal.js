import React, { useState } from "react";
import {View, Text, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { appStyle } from "./style";
//import TaskBox from "./TaskContainer";
import TaskBoxDummy from "./TaskContainerDummy";
//i don't want to work anymore, someone else pls

const TaskModal = (props) => {
    const [modalOpen, setModalOpen] = useState(true);
    
    return (
        <Modal visible={modalOpen} transparent={true} presentationStyle='overFullScreen' animationType="fade">
            <TouchableWithoutFeedback onPress={() => setModalOpen(false)}> 
                <View style={{flex: 1, flexDirection: 'column', opacity: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(40, 40, 40, 0.5)'}}>
                    <View style={{flex: 0.2, width: 300, height: 400,}}>
                    <TaskBoxDummy text={props.text}></TaskBoxDummy>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: 'white', margin: 4, padding: 4, borderRadius: 5,}}>
                        <TouchableOpacity style={[styles.modalButton]} onPress={() => alert('remove')}>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton]} onPress={() => alert('modify')}>
                            <Text>Modify</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton]} onPress={() => setModalOpen(false)}>
                            <Text>Hide</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
      </Modal>
    );
}

export default TaskModal;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    modalButton: {
        opacity: 1,
        margin: 2,
        padding: 4,
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
    }
  });