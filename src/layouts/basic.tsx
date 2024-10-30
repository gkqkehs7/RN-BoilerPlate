import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({children}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#FED2EB]">
      <ScrollView showsVerticalScrollIndicator={false} className=" px-4">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicLayout;
