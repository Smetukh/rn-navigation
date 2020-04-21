import React from 'react';
import { View, Text, Button } from 'react-native';
import  navigateToHome  from '../../services/NavigationService';
import s from './styles';

const BrowseScreen = ({ route, navigation }) => {
  // console.log('navigation Browse = ', navigation);

  const { name } = route.params;
  navigation.setOptions({
    title: name,
  });
  return (
    <View style={s.container}>
      <Text>BROWSE SCREEN {name}</Text>
      <Button title="Open HOME" onPress={() => navigateToHome()} />
    </View>
  );
};

BrowseScreen.navigationOptions = () => ({
  // title: 'Browse',
});

BrowseScreen.propTypes = {};

export default BrowseScreen;
