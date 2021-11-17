import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SCREEN} from '~/constants/theme';

export default StyleSheet.create({
  container: {
    width: 268,
    height: 160,
    marginLeft: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.grey6,
  },
  cardName: {
    fontSize: 19,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  cardNumber: {
    height: '100%',
    marginRight: 20 - 5,
  },
  cardNumberText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  balance: {
    fontSize: 19,
    position: 'absolute',
    left: 20,
    bottom: 15,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  cardNums: {
    position: 'absolute',
    left: 20,
    bottom: 15 + 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    marginLeft: 5,
    borderRadius: 4,
    backgroundColor: COLORS.white,
  },
});
