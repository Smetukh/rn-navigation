import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';
import screens from '../../navigation/screens';

const LettersScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>LettersScreen SCREEN</Text>
      <Button
        title="Go to Auth"
        onPress={() => navigation.navigate(screens.Auth)}
      />
    </View>
  );
};

LettersScreen.navigationOptions = () => ({
  title: 'Saved',
});

LettersScreen.propTypes = {};

export default LettersScreen;
