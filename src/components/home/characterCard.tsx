import React from 'react';
import {View, Image} from 'react-native';

import CustomText from '@components/customText';

import {Character} from '@type/entities/character';

interface CharacterCardProps {
  character: Character;
  size: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({character, size}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        boxShadow: '0px 1px 15px 0px rgba(0, 0, 0, 0.15)',
      }}
      className="flex items-center rounded-[20px] bg-white p-4">
      <CustomText className="text-center text-[16px] text-[#FF3B93]">
        ♡̈{character.name}♡̈
      </CustomText>

      <View className="flex flex-1 items-center justify-center">
        <Image
          className="flex-1"
          resizeMode="contain"
          source={character.imageUrl}
        />
      </View>
    </View>
  );
};

export default CharacterCard;
