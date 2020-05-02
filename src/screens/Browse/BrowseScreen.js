import React from 'react';
import { View, Text, Button } from 'react-native';
import navigateToAuth from '../../services/NavigationService';
import s from './styles';
import screens from '../../navigation/screens';
// import { Icon } from '../../styles/Icon';

const BrowseScreen = ({ route, navigation }) => {

  // const { name } = route.params;
  // navigation.setOptions({
  //   title: name,
  // });
  return (
    <View style={s.container}>
      <Text>BROWSE SCREEN </Text>
      <Button
        title="!Open Post"
        onPress={() => console.log('####################')}
        // onPress={() => navigation.navigate(screens.Post)}
      />
      <Button title="Open HOME" onPress={() => navigateToAuth()} />
      <Button
        title="Create POST "
        onPress={() => navigation.navigate(screens.CreatePostModal)}
      />
    </View>
  );
};

BrowseScreen.navigationOptions = () => ({
  // title: 'Browse',
});

BrowseScreen.propTypes = {};

export default BrowseScreen;
