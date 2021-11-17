import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '~/constants/theme';

const height = 170;

export default StyleSheet.create({
  image: {
    height,
    width: '100%',
    borderRadius: 4,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 20,
    paddingTop: 15,
  },
  overlayTitle: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    marginBottom: 16,
    color: COLORS.white,
  },
  overlaySubtitle: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: 'Manrope-Regular',
  },
  carousel: {
    paddingLeft: 20,
    // paddingRight: 20,
  },
  card: {
    height,
    borderRadius: 4,
    width: '100%',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    marginLeft: -8,
    alignSelf: 'center',
  },
  page: {},
  activePage: {
    opacity: 1,
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    opacity: 0.5,
    backgroundColor: COLORS.main,
    marginLeft: 8,
  },
});
