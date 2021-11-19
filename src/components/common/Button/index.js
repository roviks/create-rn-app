import React, {useState} from 'react';
import {View, ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '~/constants/theme.js';
import styles from './styles.js';

/**
 * Assign the project to an employee.
 * @param {import('./c').IButtonViewModel} props - The employee who is responsible for the project.
 */
export default function Button({
  title,
  primary,
  danger,
  main,
  white,
  disabled,
  onPress,
  loading,
  outline,
  transparent,
  icon,
  borderColor = 'rgba(255, 255, 255, 0)',
  borderSize = 0,
  color = COLORS.white,
  backgroundColor = COLORS.primary,
  style,
  ...props
}) {
  const getBackgroundColor = () => {
    if (disabled) {
      return COLORS.grey;
    }
    if (white) {
      return COLORS.white;
    }
    if (outline) {
      return COLORS.transparent;
    }
    if (transparent) {
      return COLORS.transparent;
    }
    if (danger) {
      return COLORS.danger;
    }
    return backgroundColor;
  };

  const getTextColor = () => {
    if (disabled) {
      return COLORS.grey;
    }
    if (outline) {
      return COLORS.main;
    }
    if (white) {
      return COLORS.black;
    }
    if (danger) {
      return COLORS.white;
    }
    if (transparent) {
      return COLORS.black;
    }
    return color;
  };

  const getBorder = () => {
    if (outline) {
      return COLORS.main;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.wrapper,
        style,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: outline ? getBorder() : borderColor,
          borderWidth: borderSize,
        },
      ]}
      {...props}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={getTextColor()} />}
        {icon && typeof icon === 'function' && (
          <View
            style={[
              styles.icon,
              {
                marginRight: !title ? 0 : 10,
              },
            ]}>
            {icon()}
          </View>
        )}
        {title && main ? (
          <Text
            style={[
              styles.text,
              {paddingLeft: loading ? 5 : 0, color: getTextColor()},
            ]}>
            {title}
          </Text>
        ) : (
          <Text
            style={[
              styles.text,
              {paddingLeft: loading ? 5 : 0, color: getTextColor()},
            ]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
