import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class ScheduleManager extends React.Component {
    render() {
      return (
          <SafeAreaView style={[appStyle.container]}>
              <View style={[appStyle.pageWrap]}>

                <View style={[appStyle.headArea]}>
                    <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_40, appStyle.rB_pushright, appStyle.b_shadow]}>
                        <Text>[Cal]</Text>
                    </TouchableOpacity>
                    <Text style={[appStyle.headText]}>
                        Date
                    </Text>
                </View>
                <ScrollView style={[appStyle.bodyWrap_SM]}>  
                    <View style={[appStyle.bodyArea_SM]}>
                        <View style={[appStyle.bodyColumn_SM]}> 
                          <Text>Left</Text>
                          <View style={{backgroundColor: 'gray', flex: 1}}>
                            <Text>Some Text</Text>
                          </View>
                        </View>
                        
                        <View style={[appStyle.bodyColumn_SM]}>
                          <Text>Right</Text>
                            <TouchableOpacity style={[appStyle.rectButton, appStyle.b_shadow, appStyle.rTB_TN]}>
                              <Text style={[]}>Button</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[appStyle.rectButton, appStyle.b_shadow, appStyle.rTB_TN]}>
                              <Text style={[]}>Button</Text>
                            </TouchableOpacity>
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
  