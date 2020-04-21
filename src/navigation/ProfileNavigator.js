import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import ProfileScreen from '../screens/Profile/ProfileScreen';
// import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={screens.Profile}
        component={ProfileScreen}
      />
      {/* <Stack.Screen
        options={{ title: 'Browse1' }}
        name={[screens.Register]}
        component={RegisterScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
