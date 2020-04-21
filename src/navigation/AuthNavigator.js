import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import LoginScreen from '../screens/Auth/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.Login} component={LoginScreen} />
      <Stack.Screen
        // options={{ title: 'Browse1' }}
        name={screens.Register}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
