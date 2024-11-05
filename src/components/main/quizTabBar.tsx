import React from 'react';
import {View} from 'react-native';

import CustomText from '@components/customText';

import QuizIcon from '@assets/images/main/quizIcon.svg';

const QuizTabBar = () => {
  return (
    <View className="flex items-center justify-center">
      <QuizIcon />
      <CustomText className="mt-1 text-[12px] text-white">티니퀴즈</CustomText>
    </View>
  );
};

export default QuizTabBar;
