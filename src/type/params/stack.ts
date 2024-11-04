import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TabNavigatorParamList = {
  HomeScreen: undefined;
};

export type StackParamList = {
  MainScreen: undefined;
  HomeScreen: undefined;
  CharacterDetailScreen: {characterId: number};
};

export type HomeScreenProps = NativeStackScreenProps<
  StackParamList,
  'HomeScreen'
>;

export type CharacterDetailScreenProps = NativeStackScreenProps<
  StackParamList,
  'CharacterDetailScreen'
>;
