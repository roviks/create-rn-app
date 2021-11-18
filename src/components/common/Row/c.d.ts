import {StyleProp, ViewProps} from 'react-native';
import {
  ViewStyle,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

export interface IRowViewModel extends ViewProps {
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}
