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

               {/*<View style={[appStyle.headArea]}>
                    <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_40, appStyle.rB_pushright, appStyle.b_shadow]}>
                        <Text>|||</Text>
                    </TouchableOpacity>
                    <Text style={[appStyle.headText]}>
                        Task Manager
                    </Text>
                </View>*/}
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
                                    good night baby (feat. Moe Shop){`\n`}
                                    Inubousaki Shian{`\n`}{`\n`}
                                    イイねの数 ミリオンでも i'm still lonely{`\n`}
                                    夢見る good night baby{`\n`}
                                    今夜も踊り誤魔化すよ T・O・K・Y・O{`\n`}
                                    生きてるよ{`\n`}
                                    {`\n`}
                                    imagine ナイフのない世界{`\n`}
                                    peace ジョンがいる世界{`\n`}
                                    人生は捨てたもんじゃない　愛　愛　愛{`\n`}
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
  