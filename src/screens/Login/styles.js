import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SCREEN} from '~/constants/theme';

export default StyleSheet.create({
  title: {
    marginTop: 80,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: 23,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
  input: {
    padding: 0,
    marginTop: 8,
    color: COLORS.white05,
    flex: 1,
    fontFamily: FONTS.regular,
  },
  inputWrapper: {
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: 'rgba(255,255,255,0.2)',
  },

  footerText: {
    textAlign: 'center',
    color: COLORS.white05,
  },
  footerTextAccent: {
    color: COLORS.primary,
  },
});
