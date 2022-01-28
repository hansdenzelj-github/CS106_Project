import React, { useEffect } from "react";
import {View, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent, Alert, Modal} from 'react-native';
import { appStyle } from "./style";
import TaskModal from "./TaskModal";

const TaskBox = (props) => {
    const OpenCard = () => {
        alert('hi');
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => OpenCard()}>
                <View style={appStyle.cardArea}>
                    <Text style={appStyle.cardText}>{props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
            <TaskModal visible={false} text={props.text}></TaskModal>
        </View>
    );
}

export default TaskBox;