/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';
import Home from './src/screen/Home/Home';

function App() {
  return (
    <SafeAreaView style={{}}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
