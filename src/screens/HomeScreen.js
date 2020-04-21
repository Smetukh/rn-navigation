import React from 'react';

import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  // navigation.navigate('BrowseScreen')
  console.log('HomeScreen navigation = ', navigation);
  console.log('HomeScreen route = ', route);
  // const { userName } = route.params;
  navigation.setOptions({
    title: 'Home1',
    headerRight: () => (
      <View>
        <Text>RIGHT</Text>
      </View>
    ),
  });
  return (
    <View>
      <Text>HomeScreen+{}</Text>
      <Button
        title="Navigate to Browse"
        onPress={() =>
          navigation.navigate('BrowseScreen', { name: 'SOME NAME' })
        }
      />
    </View>
  );
};
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
