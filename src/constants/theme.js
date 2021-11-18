import {Dimensions, Appearance} from 'react-native';

const {height, width} = Dimensions.get('window');
export const THEME = Appearance.getColorScheme();
export const PADDING = 40;

const FONT = 'Poppins';
export const FONTS = {
  regular: `${FONT}-Regular`,
  medium: `${FONT}-Medium`,
  bold: `${FONT}-Bold`,
  light: `${FONT}-Light`,
  semiBold: `${FONT}-SemiBold`,
};
export const SCREEN = {
  base: 8,
  width,
  height,
};

export const COLORS = {
  danger: '#F46363',
  success: '#6ff463',

  primary: '#6171FF',
  warning: '#FF9900',
  accentBlue: '#09A4C6',
  purple: '#B710D2',

  main: '#009387',
  background: '#1F1D2B',
  block: '#2C2833',
  white: '#ffffff',
  white05: 'rgba(255,255,255,0.5)',
  grey2: '#979797',
  grey: '#757575',
  gray4: '#BDBDBD',
};
