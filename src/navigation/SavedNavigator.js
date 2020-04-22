import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import SavedScreen from '../screens/Saved/SavedScreen';
// import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

function SavedNavigator() {
  return (
    <Stack.Navigator initialRouteName={screens.Saved}>
      <Stack.Screen name={screens.Saved} component={SavedScreen} />
      {/* <Stack.Screen
        options={{ title: 'Browse1' }}
        name={[screens.Register]}
        component={RegisterScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default SavedNavigator;
