import React from 'react';
import {View, ScrollView, Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN} from '~/constants/theme';
import styles from './styles';

/**
 * Assign the project to an employee.
 * @param {import('./c').IContainerViewModel} props - The employee who is responsible for the project.
 */
function Container({style, scroll, children, contentContainerStyle, ...props}) {
  const {top} = useSafeAreaInsets();

  if (scroll) {
    return (
      <ScrollView
        bounce={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        overScrollMode="never"
        contentContainerStyle={[
          styles.contentContainerStyle,
          contentContainerStyle,
        ]}
        style={[
          styles.scrollView,
          style,
          {
            paddingTop: top,
          },
        ]}
        {...props}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

export default React.memo(Container);
