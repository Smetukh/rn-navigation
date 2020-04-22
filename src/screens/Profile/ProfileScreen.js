import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';
import screens from '../../navigation/screens';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>PROFILE SCREEN</Text>
      <Button
        title="Go to Auth"
        onPress={() => navigation.navigate(screens.Auth)}
      />
    </View>
  );
};

ProfileScreen.navigationOptions = () => ({
  title: 'Browse',
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
