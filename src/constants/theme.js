import {Dimensions, Appearance} from 'react-native';

const {height, width} = Dimensions.get('window');
export const THEME = Appearance.getColorScheme();
export const PADDING = 20;

export const FONTS = {
  regular: 'Raleway-Regular',
  medium: 'Raleway-Medium',
  bold: 'Raleway-Bold',
};
export const SCREEN = {
  base: 8,
  width,
  height,
};

export const COLORS = {
  danger: '#F46363',
  primary: '#6372F4',
  success: '#6ff463',
  warning: '#f4b063',

  main: '#009387',
  background: 'rgba(35, 35, 36, 1)',
  block: '#2C2833',
  white: '#ffffff',
  grey2: '#979797',
  grey: '#757575',
  gray4: '#BDBDBD',
};
