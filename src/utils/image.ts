import {ImageSourcePropType} from 'react-native';

export const getPearlImage = (color: string): ImageSourcePropType => {
  if (color === 'pink') {
    return require('@assets/images/characterDetail/pinkPearl.png');
  } else if (color === 'yellow') {
    return require('@assets/images/characterDetail/yellowPearl.png');
  } else if (color === 'green') {
    return require('@assets/images/characterDetail/greenPearl.png');
  } else if (color === 'blue') {
    return require('@assets/images/characterDetail/bluePearl.png');
  } else if (color === 'purple') {
    return require('@assets/images/characterDetail/purplePearl.png');
  }

  return require('@assets/images/characterDetail/pinkPearl.png');
};

export const getBackgroundImage = (color: string): ImageSourcePropType => {
  if (color === 'pink') {
    return require('@assets/images/characterDetail/backgroundPink.png');
  } else if (color === 'yellow') {
    return require('@assets/images/characterDetail/backgroundYellow.png');
  } else if (color === 'green') {
    return require('@assets/images/characterDetail/backgroundGreen.png');
  } else if (color === 'blue') {
    return require('@assets/images/characterDetail/backgroundBlue.png');
  } else if (color === 'purple') {
    return require('@assets/images/characterDetail/backgroundPurple.png');
  }

  return require('@assets/images/characterDetail/backgroundPink.png');
};
