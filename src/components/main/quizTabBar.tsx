import React from 'react';
import {View} from 'react-native';

import CustomText from '@components/customText';

import QuizIcon from '@assets/images/main/quizIcon.svg';
import QuizFocusedIcon from '@assets/images/main/quizFocusedIcon.svg';

interface QuizTabBarProps {
  focused: boolean;
}

const QuizTabBar: React.FC<QuizTabBarProps> = ({focused}) => {
  if (focused) {
    return (
      <View className="flex items-center justify-center">
        <QuizFocusedIcon />
        <CustomText className="mt-1 text-[12px] text-white">
          티니퀴즈
        </CustomText>
      </View>
    );
  }

  return (
    <View className="flex items-center justify-center">
      <QuizIcon />
      <CustomText className="mt-1 text-[12px] text-white">티니퀴즈</CustomText>
    </View>
  );
};

export default QuizTabBar;
