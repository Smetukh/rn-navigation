import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/';
import { globalStyles } from './src/styles';

export default function App() {
  return (
    <View style={[globalStyles.fillAll]}>
      {/* <Text>Open up!!! App.js to start working on your app!</Text> */}
      <Navigator />
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
