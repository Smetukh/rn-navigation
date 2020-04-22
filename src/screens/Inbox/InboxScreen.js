import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';
import screens from '../../navigation/screens';

const InboxScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>InboxScreen SCREEN</Text>
      <Button
        title="Go to Auth"
        onPress={() => navigation.navigate(screens.Auth)}
      />
    </View>
  );
};

InboxScreen.navigationOptions = () => ({
  title: 'Saved',
});

InboxScreen.propTypes = {};

export default InboxScreen;
