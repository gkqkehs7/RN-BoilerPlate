import React from 'react';
import {Dimensions, FlatList, View} from 'react-native';

import CharacterCard from '@components/home/characterCard';

import {Character} from '@type/entities/character';

interface CharacterCardsProps {
  characters: Character[];
  navigateCharacterDetailScreen: (characterId: number) => void;
}

const CharacterCards: React.FC<CharacterCardsProps> = ({
  characters,
  navigateCharacterDetailScreen,
}) => {
  const wid = (Dimensions.get('window').width - 40) / 2;

  const renderItem = ({item}) => (
    <View className="flex">
      <CharacterCard
        navigateCharacterDetailScreen={navigateCharacterDetailScreen}
        character={item}
        size={wid}
      />
    </View>
  );

  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      ItemSeparatorComponent={<View className="m-2" />}
    />
  );
};

export default CharacterCards;
