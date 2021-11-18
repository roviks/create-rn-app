import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '~/constants/theme';

export default StyleSheet.create({
  wrapper: {
    marginBottom: 5,
    paddingVertical: 20,
    borderRadius: 36,
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
    letterSpacing: 2,
    textTransform: 'capitalize',
  },
  icon: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
