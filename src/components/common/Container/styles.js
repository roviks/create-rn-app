import {StyleSheet} from 'react-native';
import {COLORS, PADDING, SCREEN} from '~/constants/theme';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.background,
  },
  scrollView: {
    backgroundColor: COLORS.background,
    paddingHorizontal: PADDING,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: PADDING,
    paddingBottom: 0,
    backgroundColor: COLORS.background,
  },
});
