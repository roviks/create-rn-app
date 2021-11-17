import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '~/constants/theme';

export default StyleSheet.create({
  wrapper: {
    borderRadius: 13,
    height: 42,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderSection: {
    flexDirection: 'row',
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  icon: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
