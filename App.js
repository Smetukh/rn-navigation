import React, { useEffect } from 'react';

import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { SplashScreen } from 'react-native';
import Navigator from './src/navigation/';
import { globalStyles } from './src/styles';
import { Provider, createStore } from './src/stores/createStore';

const store = createStore();
SplashScreen.preventAutoHide();

export default function App() {
  useEffect(() => {
    async function bootstrap() {
      await store.bootstrap();
      //avoid practicing this
      YellowBox.ignoreWarnings(['Require cycle:']);
      SplashScreen.hide();
    }
    bootstrap();
  });
  return (
    <Provider value={store}>
      <View style={[globalStyles.fillAll]}>
        <Navigator />
      </View>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
