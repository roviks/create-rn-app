import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SCREEN} from '~/constants/theme';

const mainStyles = StyleSheet.create({
  h1: {
    fontFamily: FONTS.bold,
    fontSize: 29,
    lineHeight: 35,
    color: COLORS.white,
  },
  h2: {
    fontFamily: FONTS.bold,
    fontSize: 23,
    lineHeight: 31,
  },
  h3: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    lineHeight: 27,
  },
  h4: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    lineHeight: 19,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  textCenter: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  mt80: {
    marginTop: 80,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  my5: {
    marginVertical: 5,
  },
  my10: {
    marginVertical: 10,
  },
  my20: {
    marginVertical: 20,
  },
  my30: {
    marginVertical: 30,
  },
  my40: {
    marginVertical: 40,
  },
  mx5: {
    marginHorizontal: 5,
  },
  mx10: {
    marginHorizontal: 10,
  },
  mx20: {
    marginHorizontal: 20,
  },
  mx30: {
    marginHorizontal: 30,
  },
  mx40: {
    marginHorizontal: 40,
  },
});

export default mainStyles;
