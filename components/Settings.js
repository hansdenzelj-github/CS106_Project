import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { appStyle } from './style';

function Setting () {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignContent: 'center', borderWidth: 1, borderRadius: 5, marginVertical: 4, padding: 4,}}>
      <View style={{flex: 1}}>
        <Text>Example Setting</Text>
      </View>
      <View style={{flex: 1}}>
        <Text>Toggle</Text>
      </View>
    </View>
  );
} 

export default class Settings extends React.Component {
    render() {
      return (
          <View style={[appStyle.container]}>
              <View style={[appStyle.pageWrap]}>

                <ScrollView style={[appStyle.bodyWrap_TM]}>
                    <View>
                        <View style={[appStyle.bodyArea_TM]}>
                          <Setting></Setting>
                          <Setting></Setting>
                          <Setting></Setting>
                          <Setting></Setting>
                        </View>
                    </View>
                </ScrollView>
                
              </View>
              
              <View style={[appStyle.footerWrap]}>
                <View style={[appStyle.footerArea]}>
                    <TouchableOpacity style={[appStyle.rectButton, appStyle.b_shadow, {height: 60, width: 120, justifyContent: 'center', alignItems: 'center'}]}>
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
  