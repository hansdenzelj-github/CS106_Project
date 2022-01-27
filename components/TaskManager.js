import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';
import TaskBox from './TaskContainer';
import TaskModal from './TaskModal';

export default class TaskManager extends React.Component {
    render() {
      return (
          <View style={[appStyle.container]}>
              
              <View style={[appStyle.pageWrap]}>
                <ScrollView style={[appStyle.bodyWrap_TM]}>
                    <View>
                        <View style={[appStyle.bodyArea_TM]}>
                        <TaskModal></TaskModal>
                            <TaskBox text={"Taskbox testing"} />
                            <TaskBox text={"I honestly don't know what to do\ntoo many group projects imo"} />
                            <TaskBox text={"This is so difficult"} />
                            <TaskBox text={"Sample Task"} />
                            <TaskBox text={"This is using the ScrollView component...\n\n\n\n\n\n\n\n"} />
                            <TaskBox text={"ずっと このままとかだったり\nごめん そんなのはイヤだったり\nChanging 願ったり叶ったり\nGet out 今までのあたし\n\n 毎日 ほんの少し無理をして\n苦にならない きっと楽しい"} />
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
  