import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent} from 'react-native';
import { appStyle } from "./style";

const TaskBox = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => alert('pressed')}>
            <View style={appStyle.cardArea}>
                <Text style={appStyle.cardText}>{props.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default TaskBox;