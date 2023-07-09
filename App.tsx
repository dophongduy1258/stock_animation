/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';
import Home from './src/screen/Home/Home';
import RootNavigation from './src/navigation/RootNavigation';

function App() {
  return (
    <>
      <RootNavigation />
    </>
    // <SafeAreaView style={{}}>
    //   <Home />
    // </SafeAreaView>
  );
}

export default App;
