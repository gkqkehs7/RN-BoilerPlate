import React from 'react';
import {View, Text, TextInput, Dimensions, ScrollView} from 'react-native';

import BasicLayout from '@layouts/basic';

import CustomText from '@components/customText';

import Tini from '@assets/images/tini.svg';
import Heart from '@assets/images/heart.svg';
import Search from '@assets/images/search.svg';

const datas = [
  [
    {name: '플로라 하츄핑1', image: '', like: true},
    {name: '플로라 하츄핑2', image: '', like: true},
  ],
  [
    {name: '플로라 하츄핑3', image: '', like: true},
    {name: '플로라 하츄핑4', image: '', like: true},
  ],
  [
    {name: '플로라 하츄핑3', image: '', like: true},
    {name: '플로라 하츄핑4', image: '', like: true},
  ],
  [
    {name: '플로라 하츄핑3', image: '', like: true},
    {name: '플로라 하츄핑4', image: '', like: true},
  ],
  [{name: '플로라 하츄핑3', image: '', like: true}],
];

const Card = ({data, wid, hei}) => {
  return (
    <View
      style={{
        width: wid,
        height: wid,
        boxShadow: '0px 1px 15px 0px rgba(0, 0, 0, 0.15)',
      }}
      className="bg-white p-4 rounded-[20px] flex items-center ">
      <CustomText className="text-[16px] text-center text-[#FF3B93]">
        ♡̈{data.name}♡̈
      </CustomText>

      <Tini />
    </View>
  );
};

const Cards = () => {
  const wid = (Dimensions.get('window').width - 40) / 2;

  return (
    <>
      {datas.map(data => (
        <View className="mt-4">
          <View className="flex-row justify-between">
            <Card data={data[0]} wid={wid} hei={wid} />

            {data[1] && <Card data={data[1]} wid={wid} hei={wid} />}
          </View>
        </View>
      ))}
    </>
  );
};

const HomeScreen = () => {
  return (
    <BasicLayout>
      <View className="flex-row items-center mt-8 mb-[26px]">
        <View className="mr-[22px]">
          <CustomText className="text-[20px] text-[#FF3B93]">
            티니위키
          </CustomText>
        </View>

        <View className="flex-1 flex-row items-center justify-between  pl-4 pr-6 border-2 border-[#FF3B93] rounded-[40px] bg-white">
          <TextInput className="" placeholder="티니핑을 찾아봐츄" />

          <Search />
        </View>
      </View>

      {/* 티니핑 카드 */}
      <Cards />
    </BasicLayout>
  );
};

export default HomeScreen;
