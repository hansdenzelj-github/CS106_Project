import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class Schedule extends React.Component {
    render() {
      return (
          <SafeAreaView style={[appStyle.container, {backgroundColor: 'white'}]}>
              <View style={[appStyle.pageWrap]}>
                <View style={[appStyle.headWrap]}>
                  <View style={[appStyle.headArea, {justifyContent: 'flex-start', backgroundColor: 'white'}]}>
                      <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_40, appStyle.rB_pushright, appStyle.b_shadow]}>
                          <Text>{`<--`}</Text>
                      </TouchableOpacity>
                      <Text style={[appStyle.headText]}>
                          Schedule
                      </Text>
                  </View>
                </View>
                

                <ScrollView style={[appStyle.bodyWrap_TM]}>
                    <View>
                        <View style={[appStyle.bodyArea_TM]}>

                        <View style={[appStyle.cardArea]}>
                          <Text style={[appStyle.cardText]}>
                            Sample Card
                          </Text>
                        </View>

                        <View style={[appStyle.cardArea]}>
                          <Text style={[appStyle.cardText]}>
                            Sample Card
                            {`\n`}With newline, idk how to do this beautifully
                          </Text>
                        </View>

                        </View>
                    </View>
                </ScrollView>
                
              </View>
              
              <View style={[appStyle.footerWrap, {backgroundColor: 'white'}]}>
                <View style={[appStyle.footerArea, {flexDirection: 'row', justifyContent:'flex-end'}]}>
                    <TouchableOpacity style={[appStyle.roundButton, appStyle.rB_40, appStyle.b_shadow]}>
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
  