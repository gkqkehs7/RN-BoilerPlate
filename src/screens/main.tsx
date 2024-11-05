import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/home';
import QuizScreen from '@screens/quiz';

import WikiTabBar from '@components/main/wikiTabBar';
import QuizTabBar from '@components/main/quizTabBar';

import {TabNavigatorParamList} from '@type/params/stack';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FF73B8',
          height: 75,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          // title 없애고 custom 하기 위한 옵션
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => {
            return <WikiTabBar focused={focused} />;
          },
        })}
      />
      <Tab.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={() => ({
          // title 없애고 custom 하기 위한 옵션
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => {
            return <QuizTabBar focused={focused} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
