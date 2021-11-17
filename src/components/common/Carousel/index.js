import React from 'react';
import {View, Image, Animated, InteractionManager} from 'react-native';
import {PADDING, SCREEN} from '~/constants/theme';
import {Text} from '..';

import styles from './styles';

const Item = ({
  title,
  subtitle,
  onPress,
  coverImage,
  style,
  scale,
  frontImage,
  ...props
}) => {
  return (
    <Animated.View
      style={[
        styles.card,
        style,

        {
          transform: [{scale}],
        },
      ]}
      {...props}>
      <Image source={coverImage} resizeMode="cover" style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.overlayTitle}>{title}</Text>
        <Text style={styles.overlaySubtitle}>{subtitle}</Text>
      </View>
    </Animated.View>
  );
};

export default function ({
  carousel = [],
  style,
  cardStyle = {
    marginLeft: 0,
    marginRight: 0,
    width: null,
  },
  pagination = true,
  activeItem = Math.floor(carousel.length / 2),
}) {
  const data = [{key: 'left-space'}, ...carousel, {key: 'right-space'}];
  const WIDTH = cardStyle?.width || SCREEN.width;
  const ITEM_SIZE = WIDTH + (cardStyle?.marginRight || cardStyle?.marginLeft);
  const SPACER_ITEM_SIZE = (SCREEN.width - ITEM_SIZE) / 2;

  const [activePage, setActivePage] = React.useState(activeItem);
  const carouselScrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  React.useEffect(() => {
    const r = InteractionManager.runAfterInteractions(() => {
      flatListRef.current.scrollToIndex({animated: false, index: activePage});
    });

    return r;
  }, []);

  const getItemLayout = (d, index) => {
    const length = ITEM_SIZE;
    return {
      length,
      offset: length * index,
      index,
    };
  };

  const viewableItemsChanged = React.useRef(({changed, viewableItems}) => {
    if (changed[0].isViewable) {
      setActivePage(changed[0]?.index || 0);
    }
  }).current;

  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 55,
  }).current;

  const renderItem = ({item, index}) => {
    if (item.key === 'left-space' || item.key === 'right-space') {
      return <View style={{width: SPACER_ITEM_SIZE}} />;
    }

    let activeScale = 1;
    const scale = carouselScrollX.interpolate({
      inputRange: [
        (index - 2) * ITEM_SIZE,
        (index - 1) * ITEM_SIZE,
        index * ITEM_SIZE,
      ],
      outputRange: [0.85, activeScale, 0.85],
      extrapolate: 'clamp',
    });

    return (
      <Item
        title={item?.name}
        subtitle={item?.subtitle}
        onPress={item?.onPress}
        scale={scale}
        coverImage={item?.coverImage}
        key={index}
        style={[
          cardStyle,
          {
            marginRight: index + 1 === data.length ? 0 : cardStyle?.marginRight,
          },
        ]}
      />
    );
  };

  return (
    <View>
      <Animated.FlatList
        data={data}
        horizontal
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToInterval={ITEM_SIZE}
        getItemLayout={getItemLayout}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        snapToAlignment="start"
        snapToStart={true}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={{
          paddingLeft: PADDING,
          marginLeft: -PADDING,
        }}
        style={[styles.carousel, style]}
        renderItem={renderItem}
        keyExtractor={(item, i) => i}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: carouselScrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
      />
      {pagination && (
        <View style={styles.pagination}>
          {carousel.map((i, k) => (
            <View
              style={[
                styles.dots,
                k === activePage ? styles.activePage : styles.page,
              ]}
              key={k}
            />
          ))}
        </View>
      )}
    </View>
  );
}
