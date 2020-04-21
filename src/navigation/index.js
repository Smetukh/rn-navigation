import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/Browse/BrowseScreen';
// import { NavigationService } from '../services';
import { navigationRef, isMountedRef } from './RootNavigation';

const Stack = createStackNavigator();

function StackNavigator() {
  // listening for this action in your middleware and try to perform navigation when we get it
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{ title: 'Browse1' }}
          name="BrowseScreen"
          component={BrowseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

