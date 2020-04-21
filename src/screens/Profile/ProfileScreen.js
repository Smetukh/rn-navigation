import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';

const ProfileScreen = () => {
  return (
    <View style={s.container}>
      <Text>PROFILE SCREEN</Text>
    </View>
  );
};

ProfileScreen.navigationOptions = () => ({
  title: 'Browse',
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
