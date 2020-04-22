import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import BrowseNavigator from './BrowseNavigator';
import ProfileNavigator from './ProfileNavigator';
// import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator initialRouteName={screens.BrowseTab}>
      <Tab.Screen
        name={screens.BrowseTab}
        component={BrowseNavigator}
      />
      <Tab.Screen
        name={screens.ProfileTab}
        component={ProfileNavigator}
      />
    </Tab.Navigator>
  );
}

export default AppTabNavigator;
