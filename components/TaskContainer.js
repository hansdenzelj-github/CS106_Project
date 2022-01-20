import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { appStyle } from "./style";

const TaskBox = (props) => {
    return (
    <View style={appStyle.cardArea}>
        <Text style={appStyle.cardText}>{props.text}</Text>
    </View>
    );
}

export default TaskBox;