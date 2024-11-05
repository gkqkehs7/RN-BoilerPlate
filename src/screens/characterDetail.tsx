import React from 'react';
import {
  Image,
  ScrollView,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import {characterDetailDatas} from 'src/characterDetailDatas';

import CustomText from '@components/customText';

import {getBackgroundImage, getPearlImage} from '@utils/image';
import {
  getBorderColor,
  getDescriptionTextColor,
  getGenderTextColor,
  getTitleTextColor,
} from '@utils/color';

import {CharacterDetail} from '@type/entities/character';
import {CharacterDetailScreenProps} from '@type/params/stack';

const CharacterDetailScreen: React.FC<CharacterDetailScreenProps> = ({
  route,
}) => {
  const characterId = route.params.characterId;

  const characterDetailData: CharacterDetail = characterDetailDatas.find(
    character => character.id === characterId,
  );

  const titleTextColor = getTitleTextColor(characterDetailData.color);
  const descriptionTextColor = getDescriptionTextColor(
    characterDetailData.color,
  );
  const genderTextColor = getGenderTextColor(characterDetailData.gender);
  const borderColor = getBorderColor(characterDetailData.color);
  const pearlImage = getPearlImage(characterDetailData.color);
  const backgroundImage = getBackgroundImage(characterDetailData.color);

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={backgroundImage} resizeMode="cover">
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomText className="mt-8 text-center text-[32px] text-white">
            ♡{characterDetailData.name}♡̈
          </CustomText>

          {/* 이미지 */}
          <View className="mt-11 flex items-center">
            <Image
              className="h-[242px] w-[184px]"
              resizeMode="contain"
              source={characterDetailData.imageUrl}
            />
          </View>

          {/* 티니핑 설명 */}
          <View
            className="relative mt-10 flex-1 rounded-t-[20px] border-4 border-x-[19px] border-b-[31px] border-t-[36px] bg-white px-[21px] pb-[33px] pt-[34px]"
            style={{
              borderColor: borderColor,
              filter: 'drop-shadow(0px 0px 35.3px rgba(0, 0, 0, 0.15)',
            }}>
            <View className="absolute top-[-42px]">
              <Image source={pearlImage} />
            </View>

            <View className="absolute right-4 top-2">
              <Image
                source={require('@assets/images/characterDetail/likeButton.png')}
              />
            </View>

            {/* 성별/이름/소품 */}
            <View>
              <View className="w-[200px] flex-row items-center justify-between">
                <CustomText
                  style={{color: titleTextColor}}
                  className="text-[16px]">
                  성별
                </CustomText>
                <CustomText
                  className="text-[18px]"
                  style={{color: genderTextColor}}>
                  {characterDetailData.gender === 'male' ? '남자' : '여자'}
                </CustomText>
              </View>

              <View className="mt-[6px] w-[200px] flex-row items-center justify-between">
                <CustomText
                  style={{color: titleTextColor}}
                  className="text-[16px]">
                  이름 유래
                </CustomText>
                <CustomText
                  style={{color: descriptionTextColor}}
                  className="text-[18px] ">
                  {characterDetailData.nameOrigin}
                </CustomText>
              </View>

              <View className="mt-[6px] w-[200px] flex-row items-center justify-between">
                <CustomText
                  style={{color: titleTextColor}}
                  className="text-[16px]">
                  소품
                </CustomText>
                <CustomText
                  style={{color: descriptionTextColor}}
                  className="text-[18px]">
                  {characterDetailData.item}
                </CustomText>
              </View>
            </View>

            {/* 마법 */}
            <View className="mt-6">
              <CustomText
                style={{color: titleTextColor}}
                className="text-[16px]">
                마법
              </CustomText>
              <CustomText
                style={{color: descriptionTextColor}}
                className="mt-[10px] text-[18px]">
                {characterDetailData.generation}
              </CustomText>
              <CustomText
                style={{color: descriptionTextColor}}
                className="mt-[10px] text-[18px]">
                {characterDetailData.magic}
              </CustomText>
            </View>

            {/* 좋아하는 것 */}
            <View className="mt-6">
              <CustomText
                style={{color: titleTextColor}}
                className="text-[16px]">
                좋아하는 것
              </CustomText>
              <View>
                {characterDetailData.hobby.map((data, index) => (
                  <CustomText
                    style={{color: descriptionTextColor}}
                    className="mt-[10px] text-[18px]"
                    key={index}>
                    {data}
                  </CustomText>
                ))}
              </View>
            </View>

            {/* 싫어하는 것 */}
            <View className="mt-6">
              <CustomText className="text-[16px] text-black">
                싫어하는 것
              </CustomText>
              <View>
                {characterDetailData.hate.map((data, index) => (
                  <CustomText
                    style={{color: descriptionTextColor}}
                    className="mt-[10px] text-[18px]"
                    key={index}>
                    {data}
                  </CustomText>
                ))}
              </View>
            </View>

            {/* 좋아하는 음식 */}
            <View className="mt-6">
              <CustomText
                style={{color: titleTextColor}}
                className="text-[16px]">
                좋아하는 음식
              </CustomText>
              <View>
                {characterDetailData.favoriteFood.map((data, index) => (
                  <CustomText
                    style={{color: descriptionTextColor}}
                    className="mt-[10px] text-[18px]"
                    key={index}>
                    {data}
                  </CustomText>
                ))}
              </View>
            </View>

            {/* 싫어하는 음식 */}
            <View className="mt-6">
              <CustomText className="text-[16px] text-black">
                싫어하는 음식
              </CustomText>
              <View>
                {characterDetailData.hateFood.map((data, index) => (
                  <CustomText
                    style={{color: descriptionTextColor}}
                    className="mt-[10px] text-[18px]"
                    key={index}>
                    {data}
                  </CustomText>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CharacterDetailScreen;
