import React from 'react';
import { View, Text, Button } from 'react-native';
import navigateToAuth from '../../services/NavigationService';
import s from './styles';
import screens from '../../navigation/screens';
// import { Icon } from '../../styles/Icon';

const PostScreen = ({ route, navigation }) => {
  // console.log('navigation Browse = ', navigation);

  // const { name } = route.params;
  // navigation.setOptions({
  //   title: name,
  // });
  return (
    <View style={s.container}>
      <Text>PostScreen SCREEN </Text>
      {/* <Icon name="GreenCircle" /> */}
      <Button title="Open HOME" onPress={() => navigateToAuth()} />
      <Button
        title="Create POST "
        onPress={() => navigation.navigate(screens.CreatePostModal)}
      />
    </View>
  );
};

PostScreen.navigationOptions = () => ({
  // title: 'Browse',
});

PostScreen.propTypes = {};

export default PostScreen;
