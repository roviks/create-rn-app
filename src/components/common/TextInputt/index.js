import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity, Keyboard} from 'react-native';
import {EyeClose, EyeOpen} from '~/assets/svg';
import {COLORS, FONTS, SCREEN} from '~/constants/theme';
import styles from './styles';

/**
 * Assign the project to an employee.
 * @param {import('./c').ITextInputViewModel} props - The employee who is responsible for the project.
 */
function TextInputt({
  onChangeText,
  icon,
  iconPosition = 'right',
  label,
  style,
  value,
  inpRef,
  scrollPageY,
  inputContainer = {},
  ...props
}) {
  const newRef = React.useRef();
  const inputRef = inpRef || newRef;
  const [focused, setFocused] = useState(false);
  const [paddingBottom, setPaddingBottom] = useState(0);

  const onKeyboardHide = () => {
    console.log('Hide');
    inputRef.current?.blur();
    setPaddingBottom(0);
  };

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidHide', onKeyboardHide);

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <TextInput
      ref={inputRef}
      onPressIn={e => {
        if (
          e.nativeEvent.pageY + scrollPageY > SCREEN.height ||
          (scrollPageY === 0 && e.nativeEvent.pageY > SCREEN.height / 2)
        ) {
          setPaddingBottom(40);
        }
      }}
      onBlur={() => {
        setPaddingBottom(0);
      }}
      autoCapitalize="none"
      style={[
        style,
        styles.textInput,
        {
          paddingBottom: paddingBottom,
        },
      ]}
      {...props}
    />
  );
}

export default React.memo(TextInputt);
