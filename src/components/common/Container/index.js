import React from 'react';
import {View, ScrollView, Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN} from '~/constants/theme';
import styles from './styles';

function Container({
  style,
  scroll,
  keyboard,
  animated,
  children,
  isMenuActive = false,
  contentContainerStyle,
  ...props
}) {
  const {top} = useSafeAreaInsets();

  if (scroll) {
    return animated ? (
      <Animated.ScrollView
        bounce={false}
        scrollEnabled={!isMenuActive}
        showsVerticalScrollIndicator={false}
        style={[styles.scrollView, style]}
        keyboardShouldPersistTaps="handled"
        overScrollMode="never"
        contentContainerStyle={[
          styles.contentContainerStyle,
          contentContainerStyle,
        ]}
        {...props}>
        {children}
      </Animated.ScrollView>
    ) : (
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

  if (animated) {
    return (
      <Animated.View
        style={[styles.container, style]}
        pointerEvents={isMenuActive ? 'none' : 'auto'}
        {...props}>
        {children}
      </Animated.View>
    );
  }
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

export default React.memo(Container);
