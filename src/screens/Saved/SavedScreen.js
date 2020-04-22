import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';
import screens from '../../navigation/screens';

const SavedScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>Saved SCREEN</Text>
      <Button
        title="Go to Auth"
        onPress={() => navigation.navigate(screens.Auth)}
      />
    </View>
  );
};

SavedScreen.navigationOptions = () => ({
  title: 'Saved',
});

SavedScreen.propTypes = {};

export default SavedScreen;
