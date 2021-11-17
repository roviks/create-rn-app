import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {EyeClose, EyeOpen} from '~/assets/svg';
import {COLORS, FONTS} from '~/constants/theme';
import styles from './styles';

function Input({
  onChangeText,
  icon,
  iconPosition = 'right',
  label,
  error,
  style,
  value,
  warning,
  success,
  setIsSecureEntry,
  isSecureEntry,
  secureTextEntry,
  inputRef,
  inputContainer = {},
  ...props
}) {
  const [focused, setFocused] = useState(false);

  React.useEffect(() => {
    inputRef?.current?.setNativeProps({
      style: {
        fontFamily: FONTS.bold,
      },
    });
  }, [secureTextEntry]);

  const getFlexDirection = () => {
    if (secureTextEntry === true || secureTextEntry === false) {
      return 'row-reverse';
    }
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (warning) {
      return COLORS.main;
    }
    if (error) {
      return COLORS.danger;
    }
    if (focused) {
      return COLORS.primary;
    } else {
      if (value?.length > 0) {
        return COLORS.success;
      }
      return '#DDDDDD';
    }
  };

  return (
    <View style={[styles.wrapper, style]}>
      {label && (
        <Text style={[styles.textColor, {marginBottom: 10}]}>{label}</Text>
      )}
      <View
        style={[
          styles.inputContainer,
          inputContainer,
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        {secureTextEntry !== undefined ? (
          <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
            <View style={styles.icon}>
              {isSecureEntry ? <EyeOpen /> : <EyeClose />}
            </View>
          </TouchableOpacity>
        ) : null}
        {secureTextEntry === undefined && icon && (
          <View style={styles.icon}>
            {typeof icon === 'function' ? icon() : icon}
          </View>
        )}
        {secureTextEntry === undefined ? (
          <TextInput
            ref={inputRef}
            autoCapitalize="none"
            keyboardAppearance="light"
            placeholderTextColor={COLORS.grey}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            style={styles.textInput}
            blurOnSubmit={true}
            onChangeText={onChangeText}
            value={value}
            {...props}
          />
        ) : (
          <TextInput
            ref={inputRef}
            autoCapitalize="none"
            placeholderTextColor={COLORS.grey}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            style={styles.textInput}
            onChangeText={onChangeText}
            value={value}
            blurOnSubmit={true}
            secureTextEntry={isSecureEntry}
            {...props}
          />
        )}
      </View>

      <View style={{marginTop: 0}}>
        {warning ? (
          <Text style={styles.warning}>{warning}</Text>
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : null}
      </View>
    </View>
  );
}

export default React.memo(Input);
