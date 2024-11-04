import React from 'react';
import {Text, TextProps} from 'react-native';

interface CustomTextProps extends TextProps {}

const CustomText: React.FC<CustomTextProps> = ({style, ...rest}) => {
  const customStyle = {
    fontFamily: 'Hakgyoansim Dunggeunmiso TTF B',
  };

  return (
    <Text className="tracking-tight" style={[customStyle, style]} {...rest} />
  );
};

export default CustomText;
