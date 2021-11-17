import {StyleSheet} from 'react-native';
import {COLORS} from '~/constants/theme';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
    height: 42,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'transparent',
    color: COLORS.white,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: COLORS.black,
    fontFamily: 'Manrope-Light',
  },
  wrapper: {
    height: 42 + 35,
    marginBottom: 0,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 15,
    color: COLORS.black,
    width: '100%',
    fontFamily: 'Manrope-Regular',
  },
  error: {
    color: COLORS.danger,
    fontSize: 10,
    marginTop: 3,
  },
  warning: {
    color: COLORS.main,
    fontSize: 10,
    marginTop: 3,
    paddingBottom: 4,
  },
});
