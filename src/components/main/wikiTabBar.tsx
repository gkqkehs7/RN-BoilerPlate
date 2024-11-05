import React from 'react';
import {View} from 'react-native';
import CustomText from '@components/customText';
import WikiIcon from '@assets/images/main/wikiIcon.svg';

const WikiTabBar = () => {
  return (
    <View className="flex justify-center items-center">
      <WikiIcon />
      <CustomText className="text-white text-[12px] mt-1">티니위키</CustomText>
    </View>
  );
};

export default WikiTabBar;
