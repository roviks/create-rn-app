import React from 'react';
import {Text as T} from 'react-native';
import mainStyles from '~/components/mainStyles';
import {COLORS} from '~/constants/theme';
import styles from './styles';

export default function Text({
  style,
  children,
  main,
  bold,
  light,
  center,
  ...props
}) {
  const getColor = React.useCallback(
    (color = COLORS.black) => {
      if (main) {
        return COLORS.main;
      }

      return color;
    },
    [main],
  );

  const getFont = React.useCallback(
    (fontFamily = 'Manrope') => {
      if (bold) {
        return `${fontFamily}-Bold`;
      }
      if (light) {
        return `${fontFamily}-Light`;
      }

      return `${fontFamily}-Regular`;
    },
    [bold, light],
  );
  return (
    <T
      {...props}
      style={[
        styles.text,
        {
          color: getColor(),
          fontFamily: getFont(),
        },
        style,
        center && mainStyles.textCenter,
      ]}>
      {children}
    </T>
  );
}
