import React from 'react';
import {View, Dimensions} from 'react-native';

import CharacterCard from '@components/home/characterCard';

import {Character} from '@type/entities/character';

interface CharacterCardsProps {
  groupedCharacters: [Character, Character][];
}

const CharacterCards: React.FC<CharacterCardsProps> = ({groupedCharacters}) => {
  const wid = (Dimensions.get('window').width - 40) / 2;

  return (
    <View>
      {groupedCharacters.length > 0 &&
        groupedCharacters.map((groupedCharacter, index) => (
          <View key={index} className="mt-4">
            <View className="flex-row justify-between">
              <CharacterCard character={groupedCharacter[0]} size={wid} />
              {groupedCharacter[1] && (
                <CharacterCard character={groupedCharacter[1]} size={wid} />
              )}
            </View>
          </View>
        ))}
    </View>
  );
};

export default CharacterCards;
