import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';

const LoginScreen = () => {
  return (
    <View style={s.container}>
      <Text>Login Screen </Text>
    </View>
  );
};

LoginScreen.navigationOptions = () => ({
  title: 'Login',
});

LoginScreen.propTypes = {};

export default LoginScreen;
