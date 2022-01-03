import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class TaskDetail extends React.Component {
    render() {
      return (
          <SafeAreaView style={[appStyle.container]}>
              <View style={[appStyle.pageWrap]}>

                <View style={[appStyle.headArea, {justifyContent: 'center'}]}>
                    {/*
                    <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_40, appStyle.rB_pushright, appStyle.b_shadow]}>
                        <Text>|||</Text>
                    </TouchableOpacity>
                    */}
                    <Text style={[appStyle.headText]}>
                        "Task Name"
                    </Text>
                </View>
                <ScrollView style={[appStyle.bodyWrap_TD]}>
                    <View style={[appStyle.bodyArea_TD]}>
                        <View style={[appStyle.sample_chart]}>
                            <Text style={{fontSize: 32, fontWeight: 'bold'}}>100</Text>
                        </View>
                    </View>

                    <View style={[appStyle.TD_controlWrap]}>
                            <TouchableOpacity style={[appStyle.rectButton,appStyle.rTB_TN,appStyle.b_shadow]}>
                                <Text>Increment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[appStyle.rectButton,appStyle.rTB_TN,appStyle.b_shadow]}>
                                <Text>Decrement</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[appStyle.rectButton,appStyle.rTB_TN,appStyle.b_shadow]}>
                                <Text>Buttons</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={[appStyle.TD_controlWrap]}>
                            <TouchableOpacity style={[appStyle.rectButton,appStyle.rTB_TN,appStyle.b_shadow]}>
                                <Text>Complete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[appStyle.rectButton,appStyle.rTB_TN,appStyle.b_shadow]}>
                                <Text>Reset</Text>
                            </TouchableOpacity>
                    </View>

                    
                </ScrollView>
                
              </View>
              
              <View style={[appStyle.footerWrap]}>
                <View style={[appStyle.footerArea]}>
                    <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_100, appStyle.b_shadow]}>
                        <Text style={[appStyle.enterButtonText]}>{`<--`}</Text>
                    </TouchableOpacity>
                </View>
              </View>

          </SafeAreaView>
      ); 
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
  });
  