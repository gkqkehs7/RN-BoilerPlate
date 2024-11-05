import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';

import CustomText from '@components/customText';

const QuizScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        className="flex-1"
        source={require('src/assets/images/home/background.png')}
        resizeMode="cover">
        <View className="flex-1 items-center justify-center">
          <CustomText className="text-[28px] text-[#EE006B]">
            곧 업데이트 됩니다!
          </CustomText>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QuizScreen;
