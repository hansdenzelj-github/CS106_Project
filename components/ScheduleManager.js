import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class ScheduleManager extends React.Component {
    render() {
      return (
          <View style={[appStyle.container]}>
              <View style={[appStyle.pageWrap]}>
                
                <View style={[appStyle.bodyWrap_SM]}>  
                    <View style={[appStyle.bodyArea_SM]}>
                        <ScrollView style={[appStyle.bodyColumn_SM]}> 
                          <View style={{backgroundColor: 'pink', padding: 10, flex: 0}}>
                            <Text>Example Task</Text>
                          </View>
                          <View style={{backgroundColor: 'gray', padding: 10, flex: 0}}>
                            <Text>Feed the dogs</Text>
                          </View>
                          <View style={{backgroundColor: 'lightyellow', padding: 10, flex: 0}}>
                            <Text>Attend a meeting</Text>
                          </View>
                        </ScrollView>
                        
                        <View style={[appStyle.bodyColumn_SM, {alignItems: 'center', justifyContent: 'center', borderWidth: 1,}]}>
                            <TouchableOpacity style={[appStyle.rectButton, appStyle.b_shadow, appStyle.rTB_TN, {margin: 4,}]}>
                              <Text style={[]}>Tasks</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[appStyle.rectButton, appStyle.b_shadow, appStyle.rTB_TN, {margin: 4,}]}>
                              <Text style={[]}>Button</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
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
  