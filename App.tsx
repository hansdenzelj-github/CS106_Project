import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaViewComponent, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Welcome from './components/Welcome.js';
import TaskManager from './components/TaskManager.js';
import TaskDetail from './components/TaskDetail.js';
import Schedule from './components/Schedule.js';
import ScheduleManager from './components/ScheduleManager.js';

export default function App() {
  return (
    <SafeAreaProvider>
        {/*
        <Welcome />
        <TaskDetail />
        <TaskManager />
        <Schedule />
        <ScheduleManager />
        */}
        
        
      
    </SafeAreaProvider>
    
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
