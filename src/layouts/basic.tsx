import React, {ReactNode} from 'react';
import {ImageBackground, SafeAreaView, ScrollView} from 'react-native';

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({children}) => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require('src/assets/images/home.png')}
        resizeMode="cover">
        <ScrollView showsVerticalScrollIndicator={false} className="px-4">
          {children}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BasicLayout;
