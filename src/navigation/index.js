import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isMountedRef } from './RootNavigation';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import AuthNavigator from './AuthNavigator';
import AppTabNavigator from './AppTabNavigator';
import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';
import screens from './screens';

const Stack = createStackNavigator();

function StackNavigator({ isLoggedIn = true }) {
  // listening for this action in your middleware and try to perform navigation when we get it
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  console.log('screens.MainApp = ', screens.MainApp);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator mode="modal" headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen
            name={screens.MainApp}
            component={AppTabNavigator}
          />
        ) : (
          <>
            <Stack.Screen
              name={screens.Auth}
              component={AuthNavigator}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
