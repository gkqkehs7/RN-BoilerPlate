import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabNavigatorParamList} from '@type/params/stack';
import HomeScreen from '@screens/home';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={({route}) => ({
        //   // title 없애고 custom 하기 위한 옵션
        //   tabBarLabel: () => {
        //     return null;
        //   },
        //   tabBarIcon: ({focused}) => {
        //     return <HomeTabComponent focused={focused} />;
        //   },
        // })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
