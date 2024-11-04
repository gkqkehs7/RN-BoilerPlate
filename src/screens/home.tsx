import React from 'react';
import {View, TextInput} from 'react-native';

import {characters} from 'src/characters';

import BasicLayout from '@layouts/basic';

import CustomText from '@components/customText';
import CharacterCards from '@components/home/characterCards';

import {Character} from '@type/entities/character';

import Search from '@assets/images/search.svg';

const HomeScreen = () => {
  const [groupedCharacters, setGroupedCharacters] = React.useState<
    [Character, Character][]
  >([]);

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

          <View className="flex-1 flex-row items-center justify-between rounded-[40px] border-2 border-[#FF3B93] bg-white pl-4 pr-6">
            <TextInput placeholder="티니핑을 찾아봐츄" />
            <Search />
          </View>
        </View>

        {/* 티니핑 카드 */}
        <CharacterCards groupedCharacters={groupedCharacters} />
      </View>
    </BasicLayout>
  );
};

export default HomeScreen;
