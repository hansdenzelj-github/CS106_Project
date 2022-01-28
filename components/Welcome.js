import { NavigationContainer, NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyle } from './style';

export default class Welcome extends React.Component {
  render() {
    return (

        <SafeAreaView style={[appStyle.container]}>
            <View style={[appStyle.pageWrap]}>

                <View style={[appStyle.headArea]}>
                    <Text style={[appStyle.headText]}>Sched</Text>
                </View>
                
                <View style={[appStyle.bodyWrap_Welcome]}>
                    <View style={[appStyle.bodyArea]}>
                        <Text style={[appStyle.bodyText]}>Logo{'\n'}{'\n'}Welcome back! User{'\n\n'}Date Time, Greeting</Text>
                    </View>
                </View>

                <View style={[appStyle.footerWrap]}>
                    <View style={[appStyle.footerArea]}>
                        <TouchableOpacity style={[appStyle.enterButton]} onPress={() => this.props.navigation.navigate("Nav")}>
                            <Text style={[appStyle.enterButtonText]}>
                                Get to work
                            </Text>
                        </TouchableOpacity>
                    </View>
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
  
