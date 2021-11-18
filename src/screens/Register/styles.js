import {StyleSheet} from 'react-native';
import {COLORS, SCREEN} from '~/constants/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  formContainer: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingHorizontal: 16,
    paddingVertical: 40,
    borderRadius: 30,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeInputText: {
    fontSize: 23,
    fontFamily: 'Manrope-Bold',
    lineHeight: 31,
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: SCREEN.width - 40,
    paddingHorizontal: 23,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: COLORS.mainLight,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
