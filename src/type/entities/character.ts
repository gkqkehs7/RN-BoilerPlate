import {ImageSourcePropType} from 'react-native';

export type Character = {
  id: number;
  name: string;
  imageUrl: ImageSourcePropType | undefined;
  like: boolean;
};
