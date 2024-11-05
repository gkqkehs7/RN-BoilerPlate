import React from 'react';
import {View} from 'react-native';

import CustomText from '@components/customText';

import WikiFocusedIcon from '@assets/images/main/wikiFocusedIcon.svg';
import WikiIcon from '@assets/images/main/wikiIcon.svg';

interface WikiTabBarProps {
  focused: boolean;
}

const WikiTabBar: React.FC<WikiTabBarProps> = ({focused}) => {
  if (focused) {
    return (
      <View className="flex items-center justify-center">
        <WikiFocusedIcon />
        <CustomText className="mt-1 text-[12px] text-white">
          티니위키
        </CustomText>
      </View>
    );
  }

  return (
    <View className="flex items-center justify-center">
      <WikiIcon />
      <CustomText className="mt-1 text-[12px] text-white">티니위키</CustomText>
    </View>
  );
};

export default WikiTabBar;
