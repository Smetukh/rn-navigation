import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import BrowseScreen from '../screens/Browse/BrowseScreen';
// import RegisterScreen from '../screens/Auth/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

function BrowseNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={screens.Browse} component={BrowseScreen} />
      {/* <Stack.Screen
        options={{ title: 'Browse1' }}
        name={[screens.Register]}
        component={RegisterScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default BrowseNavigator;
