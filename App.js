import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppContainer from './AppContainer.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Calculator</Text>
      <View style={{height: 150}}>
      </View>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textColor: {
    color: 'white',
    alignItems: 'flex-start',
    fontSize: 30,
  }
});
