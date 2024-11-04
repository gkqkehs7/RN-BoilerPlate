import React from 'react';
import {View, Image, Pressable} from 'react-native';

import CustomText from '@components/customText';

import {Character} from '@type/entities/character';

interface CharacterCardProps {
  character: Character;
  size: number;
  navigateCharacterDetailScreen: (characterId: number) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  size,
  navigateCharacterDetailScreen,
}) => {
  return (
    <Pressable
      style={{
        width: size,
        height: size,
        boxShadow: '0px 1px 15px 0px rgba(0, 0, 0, 0.15)',
      }}
      className="flex items-center rounded-[20px] bg-white p-4"
      onPress={() => navigateCharacterDetailScreen(character.id)}>
      <CustomText className="text-center text-[16px] text-[#FF3B93]">
        ♡̈{character.name}♡̈
      </CustomText>

      <View className="flex-1 items-center justify-center mt-2">
        <Image
          style={{width: size - 50, height: size - 50}}
          resizeMode="contain"
          source={character.imageUrl}
        />
      </View>
    </Pressable>
  );
};

export default CharacterCard;
