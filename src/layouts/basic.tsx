import React, {ReactNode} from 'react';
import {ImageBackground, SafeAreaView, ScrollView} from 'react-native';

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({children}) => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        className="flex-1"
        source={require('src/assets/images/home/background.png')}
        resizeMode="cover">
        <ScrollView className="px-4">{children}</ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BasicLayout;
