import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import BrowseNavigator from './BrowseNavigator';
import ProfileNavigator from './ProfileNavigator';
import SavedNavigator from './SavedNavigator';
import InboxNavigator from './InboxNavigator';

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator initialRouteName={screens.BrowseTab}>
      <Tab.Screen
        name={screens.BrowseTab}
        component={BrowseNavigator}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-search" size={32} color="#349A89" />
          ),
        }}
      />
      <Tab.Screen
        name={screens.SavedTab}
        component={SavedNavigator}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-bookmark" size={32} color="#349A89" />
          ),
        }}
      />
      <Tab.Screen
        name={screens.InboxTab}
        component={InboxNavigator}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-mail" size={32} color="#349A89" />
          ),
        }}
      />
      <Tab.Screen
        name={screens.ProfileTab}
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person" size={32} color="#349A89" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabNavigator;
