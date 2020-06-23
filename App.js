import React from 'react';
import { Text, View } from 'react-native';
import Welcome from './src/components/Welcome';
import Movies from './src/components/Movies';
import styles from './App.style';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the exouhsia 1 2 3 </Text>
      <Welcome></Welcome>
      <Movies></Movies>
    </View>
  );
}

export default App;