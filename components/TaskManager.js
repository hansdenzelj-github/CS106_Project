import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';
import TaskBox from './TaskContainer';

export default class TaskManager extends React.Component {
    render() {
      return (
          <View style={[appStyle.container]}>
              <View style={[appStyle.pageWrap]}>

                <ScrollView style={[appStyle.bodyWrap_TM]}>
                    <View>
                        <View style={[appStyle.bodyArea_TM]}>

                            <TaskBox text={"Taskbox testing"}/>

                            <View style={[appStyle.cardArea]}>
                                <Text style={[appStyle.cardText]}>
                                    How do we change the{`\n`}
                                    backgroundColor of the Task Cards?
                                </Text>
                            </View>

                            <View style={[appStyle.cardArea]}>
                                <Text style={[appStyle.cardText]}>
                                    Sample Task
                                </Text>
                            </View>

                            <View style={[appStyle.cardArea]}>
                                <Text style={[appStyle.cardText]}>
                                    This is using the ScrollView component...{`\n`}
                                    {`\n`}
                                    {`\n`}
                                    {`\n`}
                                    {`\n`}
                                    {`\n`}
                                    {`\n`}
                                    {`\n`}
                                </Text>
                            </View>

                            <View style={[appStyle.cardArea]}>
                                <Text style={[appStyle.cardText]}>
                                ずっと このままとかだったり{`\n`}
                                ごめん そんなのはイヤだったり{`\n`}
                                Changing 願ったり叶ったり{`\n`}
                                Get out 今までのあたし{`\n`}{`\n`}

                                毎日 ほんの少し無理をして{`\n`}
                                苦にならない きっと楽しい{`\n`}
                                Wake up やる気奮い起こして{`\n`}{`\n`}

                                しょうがないか{`\n`}{`\n`}

                                せっかく生きてるんだ{`\n`}
                                楽しまなきゃね ソンソン{`\n`}
                                憧れのキミに もっと{`\n`}
                                近づくための冒険{`\n`}
                                </Text>
                            </View>

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
  