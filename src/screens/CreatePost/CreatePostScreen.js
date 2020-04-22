import React from 'react';
import { View, Text, Button } from 'react-native';
// import {NavigationService} from '../../../services';
import s from './styles';

const CreatePostScreen = () => {
  return (
    <View style={s.container}>
      <Text>Create Post MODAL SCREEN </Text>
    </View>
  );
};

CreatePostScreen.navigationOptions = () => ({
  title: 'Create Post',
});

CreatePostScreen.propTypes = {};

export default CreatePostScreen;
