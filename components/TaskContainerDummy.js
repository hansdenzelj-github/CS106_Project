import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent} from 'react-native';
import { appStyle } from "./style";

const TaskBoxDummy = (props) => {
    return (
            <View style={appStyle.cardArea}>
                <Text style={appStyle.cardText}>{props.text}</Text>
            </View>
    );
}

export default TaskBoxDummy;