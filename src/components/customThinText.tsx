import React from 'react';
import {Text, TextProps} from 'react-native';

interface CustomThinTextProps extends TextProps {}

const CustomThinText: React.FC<CustomThinTextProps> = ({style, ...rest}) => {
  const customStyle = {
    fontFamily: 'Hakgyoansim Dunggeunmiso TTF R',
  };

  return (
    <Text className="tracking-tight" style={[customStyle, style]} {...rest} />
  );
};

export default CustomThinText;
