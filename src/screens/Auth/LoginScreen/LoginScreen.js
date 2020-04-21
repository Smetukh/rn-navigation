import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';
import screens from '../../../navigation/screens';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>Login Screen </Text>
      <Button
        title="Navigate to register"
        onPress={() => navigation.navigate(screens.Register)}
      />
      <Button
        title="Open Tabs"
        onPress={() => navigation.navigate(screens.BrowseTab)}
      />
    </View>
  );
};

// LoginScreen.navigationOptions = () => ({
//   title: 'Login11',
// });

LoginScreen.propTypes = {};

export default LoginScreen;
