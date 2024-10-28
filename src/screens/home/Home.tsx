import React from 'react';
import {View, Text} from 'react-native';

import BasicLayout from '@layouts/basic';
import CustomText from '@components/customText';

const HomeScreen = () => {
  return (
    <BasicLayout>
      <View>
        <View>
          <CustomText className="text-[40px]">티니위키</CustomText>
        </View>
        <View>
          <Text>검색창</Text>
        </View>
      </View>

      <View className="mt-4 h-20 items-center justify-center bg-gray-200">
        <Text>Screen1</Text>
      </View>
      <View className="mt-4 h-20 items-center justify-center bg-gray-200">
        <Text>Screen2</Text>
      </View>
      <View className="mt-4 h-20 items-center justify-center bg-gray-200">
        <Text>Screen3</Text>
      </View>
    </BasicLayout>
  );
};

export default HomeScreen;
