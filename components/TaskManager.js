import React,{Ref, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';
import TaskBox from './TaskContainer';
import TaskBoxDummy from './TaskContainerDummy'
import TaskModal from './TaskModal';

export default class TaskManager extends React.Component {
    render() {

      return (
          <View style={[appStyle.container]}>
              
              <View style={[appStyle.pageWrap]}>
                <ScrollView style={[appStyle.bodyWrap_TM]}>
                    <View>
                        <View style={[appStyle.bodyArea_TM]}>
                            <TaskBox text={"I have no idea what to do\nbut this is a sample task"} />
                            <TaskBoxDummy text={"This is so difficult"} />
                            <TaskBoxDummy text={"Sample Task"} />
                            <TaskBoxDummy text={"This is using the ScrollView component...\n\n\n\n\n\n\n\n"} />
                            <TaskBoxDummy text={"Text\neven more text\nmore and more text\nGet out 今までのあたし\n\n 毎日 ほんの少し無理をして\n苦にならない きっと楽しい"} />
                        </View>
                    </View>
                </ScrollView>
              </View>
              
              <View style={[appStyle.footerWrap]}>
                <View style={[appStyle.footerArea]}>
                    <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_100, appStyle.b_shadow]}>
                        <Text style={[appStyle.enterButtonText]}>+</Text>
                    </TouchableOpacity>
                </View>
              </View>

          </View>
      ); 
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
  });
  