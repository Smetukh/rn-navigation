import React from 'react';
import { View, Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// import {NavigationService} from '../../../services';
import s from './styles';
import screens from '../../../navigation/screens';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>REGISTER SCREEN</Text>
      <Button
        title="Open Tabs"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: screens.BrowseTab,
              params: {
                user: 'jane',
              },
            }),
          )
        }
      />
    </View>
  );
};

RegisterScreen.navigationOptions = () => ({
  title: 'Register',
});

RegisterScreen.propTypes = {};

export default RegisterScreen;
