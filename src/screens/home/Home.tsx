import React from 'react';
import {View, Text} from 'react-native';

import BasicLayout from '@layouts/basic';

const HomeScreen = () => {
  return (
    <BasicLayout>
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
