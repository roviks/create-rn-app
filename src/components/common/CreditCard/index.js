import React from 'react';
import {View, Image, Pressable, Animated} from 'react-native';
import {createAnimatedComponent} from '~/helpers/createAnimatedComponent';
import formatCurrency from '~/helpers/formatCurrency';
import {Text} from '..';
import styles from './styles';

function CreditCard({
  cardName,
  cardNumber,
  balance,
  coverImage,
  style,
  isActive = false,
  animated,
  ...props
}) {
  const APressable = createAnimatedComponent(Pressable);
  const animation = React.useRef(new Animated.Value(0)).current;

  const hideCardNumber = (num = '') => {
    if (num.length === 16) {
      return [num.slice(0, 4), '****', '****', num.slice(12)];
    } else {
      return [...num];
    }
  };

  React.useEffect(() => {
    if (isActive) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isActive]);

  if (animated) {
    return (
      <APressable
        style={[
          styles.container,
          style,
          {
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1],
                }),
              },
            ],
          },
        ]}
        {...props}>
        <Image source={coverImage} style={styles.image} />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <Text style={styles.cardName}>{cardName}</Text>
          <View style={[styles.cardNums]}>
            {hideCardNumber(cardNumber).map(num => {
              if (num === '****') {
                return (
                  <View style={styles.dots}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                  </View>
                );
              }
              return (
                <View style={styles.cardNumber}>
                  <Text style={styles.cardNumberText}>{num}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.balance}>${formatCurrency(balance, '.')}</Text>
        </View>
      </APressable>
    );
  }

  return (
    <Pressable style={[styles.container, style]} {...props}>
      <Image source={coverImage} style={styles.image} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Text style={styles.cardName}>{cardName}</Text>
        <View style={[styles.cardNums]}>
          {hideCardNumber(cardNumber).map(num => {
            if (num === '****') {
              return (
                <View style={styles.dots}>
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                </View>
              );
            }
            return (
              <View style={styles.cardNumber}>
                <Text style={styles.cardNumberText}>{num}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.balance}>${formatCurrency(balance, '.')}</Text>
      </View>
    </Pressable>
  );
}

export default React.memo(CreditCard);
