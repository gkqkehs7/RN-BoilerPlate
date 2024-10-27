import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native';

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({children}) => {
  return <SafeAreaView className="flex-1 bg-white">{children}</SafeAreaView>;
};

export default BasicLayout;
