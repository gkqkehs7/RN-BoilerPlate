import React from 'react';
import {View} from 'react-native';
import QuizIcon from '@assets/images/main/quizIcon.svg';
import CustomText from '@components/customText';

const QuizTabBar = () => {
  return (
    <View className="flex justify-center items-center">
      <QuizIcon />
      <CustomText className="text-white text-[12px] mt-1">티니퀴즈</CustomText>
    </View>
  );
};

export default QuizTabBar;
