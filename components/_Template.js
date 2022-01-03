import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class TaskManager extends React.Component {
    render() {
      return (
          <SafeAreaView style={[appStyle.container]}>
              <View style={[appStyle.pageWrap]}>

                <View style={[appStyle.headArea]}>
                    <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_40, appStyle.rB_pushright, appStyle.b_shadow]}>
                        <Text>|||</Text>
                    </TouchableOpacity>
                    <Text style={[appStyle.headText]}>
                        Task Manager
                    </Text>
                </View>
                <ScrollView style={[appStyle.bodyWrap_TM]}>
                    <View>
                        <View style={[appStyle.bodyArea_TM]}>

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
  