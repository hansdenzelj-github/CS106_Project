import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, SafeAreaViewComponent, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import Welcome from './components/Welcome.js';
import TaskManager from './components/TaskManager.js';
import TaskDetail from './components/TaskDetail.js';
import Schedule from './components/Schedule.js';
import ScheduleManager from './components/ScheduleManager.js';
import NavPage from './components/NavPage.js';
import Settings from './components/Settings.js';

enableScreens();
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

interface ScreenProps {
  navigation: any; 
}

function PageNav({ navigation }:{ navigation:any }) {
  return (
    <NavPage navigation={navigation}/>
  );
}

function PageWelcome({ navigation }:{ navigation:any }) {
  return (
    <Welcome navigation={navigation}/>
  );
}

function PageTaskM() {
  return (
    <TaskManager />
  );
}

function PageSched() {
  return (
    <Schedule />
  );
}

function PageSchedM() {
  return (
    <ScheduleManager />
  );
}

function PageSettings() {
  return (
    <Settings />
  );
}

function HomeScreen({ navigation } : {navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PageWelcome} options={{headerShown: false}} />
        <Stack.Screen name="Nav" component={PageNav} options={{headerShown: false}}/>
        <Stack.Screen name="Tasks" component={PageTaskM} />
        <Stack.Screen name="Schedule" component={PageSched} />
        <Stack.Screen name="ScheduleManager" component={PageSchedM} options={{title: 'Schedule Manager'}}/>
        <Stack.Screen name="Settings" component={PageSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
