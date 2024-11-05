import React from 'react';
import {View, TextInput, Pressable} from 'react-native';

import {characterDatas} from 'src/characterDatas';

import BasicLayout from '@layouts/basic';

import CustomText from '@components/customText';
import CustomThinText from '@components/customThinText';
import CharacterCards from '@components/home/characterCards';

import {HomeScreenProps} from '@type/params/stack';
import {Character} from '@type/entities/character';

import Search from '@assets/images/search.svg';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [characters, setCharacters] =
    React.useState<Character[]>(characterDatas);
  const [placeholder, setPlaceholder] =
    React.useState<string>('티니핑을 찾아봐요♥');

  const textInputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    // Filter characters based on search input
    if (searchInput) {
      const filteredCharacters = characterDatas.filter(character =>
        character.name.includes(searchInput.trim()),
      );
      setCharacters(filteredCharacters);
    } else {
      setCharacters(characterDatas);
    }
  }, [searchInput]);

  const textInputFocus = () => {
    textInputRef.current?.focus();
  };

  const textInputOnfocus = (): void => {
    setPlaceholder('');
  };

  const textInputOnBlur = (): void => {
    setPlaceholder('티니핑을 찾아봐요♥');
    setSearchInput('');
  };

  const navigateCharacterDetailScreen = (characterId: number) => {
    navigation.navigate('CharacterDetailScreen', {characterId: characterId});
  };

  return (
    <BasicLayout>
      <View className="mb-8 mt-6">
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
              value={searchInput}
              onChangeText={setSearchInput}
              onFocus={textInputOnfocus}
              onBlur={textInputOnBlur}
              maxLength={40}
            />

            <Search />
          </Pressable>
        </View>

        {/* 티니핑 카드 */}
        <CharacterCards
          characters={characters}
          navigateCharacterDetailScreen={navigateCharacterDetailScreen}
        />
      </View>
    </BasicLayout>
  );
};

export default HomeScreen;
