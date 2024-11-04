import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/home';
import CharacterDetailScreen from '@screens/characterDetail';

import {StackParamList} from '@type/params/stack';
import MainScreen from '@screens/main';

const Stack = createNativeStackNavigator<StackParamList>();

const AppInner = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="CharacterDetailScreen"
        component={CharacterDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AppInner;
