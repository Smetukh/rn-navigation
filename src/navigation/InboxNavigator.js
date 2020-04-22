import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import InboxScreen from '../screens/Inbox/InboxScreen';
// import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

function InboxNavigator() {
  return (
    <Stack.Navigator initialRouteName={screens.Inbox}>
      <Stack.Screen name={screens.Inbox} component={InboxScreen} />
      {/* <Stack.Screen
        options={{ title: 'Browse1' }}
        name={[screens.Register]}
        component={RegisterScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default InboxNavigator;
