import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
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
