import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import CreatePostScreen from '../screens/CreatePost/CreatePostScreen';
// import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={screens.CreatePost}
        component={CreatePostScreen}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
