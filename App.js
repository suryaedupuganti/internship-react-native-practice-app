import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import Movies from './Movies';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the exouhsia 1 2 3 </Text>
      <Welcome></Welcome>
      <Movies></Movies>
    </View>
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
