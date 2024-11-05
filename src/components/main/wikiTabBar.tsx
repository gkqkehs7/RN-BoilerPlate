import React from 'react';
import {View} from 'react-native';

import CustomText from '@components/customText';

import WikiIcon from '@assets/images/main/wikiIcon.svg';

const WikiTabBar = () => {
  return (
    <View className="flex items-center justify-center">
      <WikiIcon />
      <CustomText className="mt-1 text-[12px] text-white">티니위키</CustomText>
    </View>
  );
};

export default WikiTabBar;
