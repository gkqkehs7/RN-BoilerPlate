import {ImageSourcePropType} from 'react-native';

export type Character = {
  id: number;
  name: string;
  imageUrl: ImageSourcePropType | undefined;
  like: boolean;
};

export type CharacterDetail = {
  id: number;
  name: string;
  imageUrl: ImageSourcePropType | undefined;
  like: boolean;

  nameOrigin: string;
  item: string;
  color: string; // 배경색
  gender: 'male' | 'female'; // 성별
  generation: string; // 기수
  magic: string; // 마법
  hobby: string[]; // 좋아하는 것
  hate: string[]; // 싫어하는 것
  favoriteFood: string[]; // 좋아하는 음식
  hateFood: string[]; // 싫어하는 음식
};
