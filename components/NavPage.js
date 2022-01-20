import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class NavPage extends React.Component {
    render() {
      return (
          <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 40, alignItems: 'center'}}>

              <View style={{flex: 1, flexDirection: 'column'}}>
                <TouchableOpacity style={styles.buttonRectangle} onPress={() => this.props.navigation.navigate("Schedule")}>
                  <Text style={styles.buttonText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRectangle} onPress={() => this.props.navigation.navigate("Tasks")}>
                  <Text style={styles.buttonText}>Tasks</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, flexDirection: 'column'}}>
                <TouchableOpacity style={styles.buttonRectangle} onPress={() => this.props.navigation.navigate("ScheduleManager")}>
                  <Text style={styles.buttonText}>Schedule{'\n'}Manager</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRectangle} onPress={() => this.props.navigation.navigate("Settings")}>
                  <Text style={styles.buttonText}>Settings</Text>
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
    buttonRectangle: {
      height: 140,
      width: 140,
      padding: 8,
      margin: 8,
      backgroundColor: 'lightgray',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  