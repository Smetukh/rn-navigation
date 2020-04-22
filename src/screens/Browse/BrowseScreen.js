import React from 'react';
import { View, Text, Button } from 'react-native';
import navigateToHome from '../../services/NavigationService';
import s from './styles';
import screens from '../../navigation/screens';
// import { Icon } from '../../styles/Icon';

const BrowseScreen = ({ route, navigation }) => {
  // console.log('navigation Browse = ', navigation);

  // const { name } = route.params;
  // navigation.setOptions({
  //   title: name,
  // });
  return (
    <View style={s.container}>
      <Text>BROWSE SCREEN </Text>
      {/* <Icon name="GreenCircle" /> */}
      <Button title="Open HOME" onPress={() => navigateToHome()} />
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
