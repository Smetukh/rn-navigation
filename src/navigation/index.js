import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isMountedRef } from './RootNavigation';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import AuthNavigator from './AuthNavigator';
import CreatePostNavigator from './CreatePostNavigator';
import AppTabNavigator from './AppTabNavigator';
import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';
import screens from './screens';

const Stack = createStackNavigator();

function StackNavigator({ isLoggedIn = false }) {
  // listening for this action in your middleware and try to perform navigation when we get it
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  console.log('screens.INDEX ');
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        mode="modal"
        headerMode="none"
        // initialRouteName={isLoggedIn ? 'MainApp' : 'Auth'}
      >
        {/* {isLoggedIn ? ( */}
        {/* // <AppTabNavigator /> */}
        {/* ) : ( */}
        <Stack.Screen
          name={screens.MainApp}
          component={AppTabNavigator}
        />
        {/* // <AuthNavigator /> */}
        {/* // <> */}
        <Stack.Screen name={screens.Auth} component={AuthNavigator} />
        <Stack.Screen
          name={screens.CreatePostModal}
          component={CreatePostNavigator}
        />
        {/* // </> */}
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
