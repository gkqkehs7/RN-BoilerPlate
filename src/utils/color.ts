export const getBorderColor = (color: string): string => {
  if (color === 'pink') {
    return 'rgba(254, 210, 235, 0.70)';
  } else if (color === 'yellow') {
    return 'rgba(255, 234, 150, 0.70)';
  } else if (color === 'green') {
    return 'rgba(222, 238, 159, 0.80)';
  } else if (color === 'blue') {
    return 'rgba(206, 238, 255, 0.80)';
  } else if (color === 'purple') {
    return 'rgba(215, 166, 225, 0.70)';
  }

  return 'rgba(254, 210, 235, 0.70)';
};

export const getTitleTextColor = (color: string): string => {
  if (color === 'pink') {
    return '#FF73B8';
  } else if (color === 'yellow') {
    return '#FC0';
  } else if (color === 'green') {
    return '#34C759';
  } else if (color === 'blue') {
    return '#007AFF';
  } else if (color === 'purple') {
    return '#AF52DE';
  }

  return '#FF73B8';
};

export const getDescriptionTextColor = (color: string): string => {
  if (color === 'pink') {
    return '#EE006B';
  } else if (color === 'yellow') {
    return '#F49F00';
  } else if (color === 'green') {
    return '#1E8001';
  } else if (color === 'blue') {
    return '#0043A2';
  } else if (color === 'purple') {
    return '#3B0088';
  }

  return '#FF73B8';
};

export const getGenderTextColor = (gender: string): string => {
  if (gender === 'male') {
    return '#007AFF';
  } else if (gender === 'female') {
    return '#FF3B93';
  }
  return '#007AFF';
};
