import {
  ColorValue,
  StyleProp,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';

export interface IButtonViewModel extends TouchableOpacityProps {
  title: String;
  primary?: Boolean;
  danger?: Boolean;
  main?: Boolean;
  white?: Boolean;
  disabled?: Boolean;
  onPress?: Function;
  loading?: Boolean;
  outline?: Boolean;
  transparent?: Boolean;
  icon?: Boolean;
  borderColor?: ColorValue;
  borderSize?: BorderSize;
  color?: ColorValue;
  backgroundColor: ColorValue;
}
