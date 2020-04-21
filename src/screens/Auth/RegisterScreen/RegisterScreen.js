import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';
import screens from '../../../navigation/screens';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>REGISTER SCREEN</Text>
      <Button
        title="Open Tabs"
        onPress={() => navigation.navigate(screens.BrowseTab)}
      />
    </View>
  );
};

RegisterScreen.navigationOptions = () => ({
  title: 'Register',
});

RegisterScreen.propTypes = {};

export default RegisterScreen;
