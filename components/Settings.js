import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class Settings extends React.Component {
    render() {
      return (
          <View style={[appStyle.container]}>
              <View style={[appStyle.pageWrap]}>

                <ScrollView style={[appStyle.bodyWrap_TM]}>
                    <View>
                        <View style={[appStyle.bodyArea_TM]}>

                        </View>
                    </View>
                </ScrollView>
                
              </View>
              
              <View style={[appStyle.footerWrap]}>
                <View style={[appStyle.footerArea]}>
                    <TouchableOpacity style={[appStyle.rectButton, appStyle.b_shadow, {height: 100, width: 140,}]}>
                        <Text style={[appStyle.enterButtonText]}>Apply</Text>
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
  