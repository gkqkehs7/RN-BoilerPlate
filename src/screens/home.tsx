import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import {characters} from 'src/characterDatas';

import BasicLayout from '@layouts/basic';

import CustomText from '@components/customText';
import CharacterCards from '@components/home/characterCards';

import {Character} from '@type/entities/character';
import {HomeScreenProps} from '@type/params/stack';

import Search from '@assets/images/search.svg';
import CustomThinText from '@components/customThinText';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [groupedCharacters, setGroupedCharacters] = React.useState<
    [Character, Character][]
  >([]);

  const [placeholder, setPlaceholder] =
    React.useState<string>('티니핑을 찾아봐요♥');

  const textInputRef = React.useRef<TextInput>(null);

  const textInputFocus = () => {
    textInputRef.current?.focus();
  };

  const navigateCharacterDetailScreen = (characterId: number) => {
    console.log(characterId);
    navigation.navigate('CharacterDetailScreen', {characterId: characterId});
  };

  React.useEffect(() => {
    const groupedData: [Character, Character][] = characters
      .reduce(
        (acc: [Character, Character][], item: Character, index: number) => {
          if (index % 2 === 0) {
            acc.push([item, characters[index + 1]]);
          }
          return acc;
        },
        [] as [Character, Character][],
      )
      .filter(Boolean);

    setGroupedCharacters(groupedData);
  }, []);

  return (
    <BasicLayout>
      <View className="my-8">
        <View className="mb-[26px] flex-row items-center">
          <View className="mr-[22px]">
            <CustomText className="text-[20px] text-[#FF3B93]">
              티니위키
            </CustomText>
          </View>

          {/* 입력창 */}
          <Pressable
            onPress={textInputFocus}
            className="flex-1 flex-row items-center justify-between rounded-[40px] border-2 border-[#FF3B93] bg-white pl-4 pr-6">
            <View className="absolute left-6">
              <CustomThinText className="text-[#AEAEB2]">
                {placeholder}
              </CustomThinText>
            </View>

            <TextInput
              ref={textInputRef}
              onFocus={() => setPlaceholder('')}
              onBlur={() => setPlaceholder('티니핑을 찾아봐요♥')}
              maxLength={40}
            />

            <Search />
          </Pressable>
        </View>

        {/* 티니핑 카드 */}
        <CharacterCards
          groupedCharacters={groupedCharacters}
          navigateCharacterDetailScreen={navigateCharacterDetailScreen}
        />
      </View>
    </BasicLayout>
  );
};

export default HomeScreen;
