import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 4,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
      <StatusBar translucent={true} />
      {/* <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 4,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      > */}
      <SkeletonPlaceholder speed={500} highlightColor="#fcfeff">
        <View
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginTop: 5,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                margin: 10,
              }}
            />
            <View>
              <View style={{width: 200, height: 18, marginTop: 18}} />
              <View style={{width: 100, height: 16, marginTop: 8}} />
            </View>
          </View>

          <View
            style={{
              height: 30,
              width: 6,
              marginTop: 20,
              marginRight: 8,
            }}
          />
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder speed={500} highlightColor="#fcfeff">
        <View
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginTop: 16,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                margin: 10,
              }}
            />
            <View>
              <View style={{width: 200, height: 18, marginTop: 18}} />
              <View style={{width: 100, height: 16, marginTop: 8}} />
            </View>
          </View>

          <View
            style={{
              height: 30,
              width: 6,
              marginTop: 20,
              marginRight: 8,
            }}
          />
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder speed={500} highlightColor="#fcfeff">
        <View
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginTop: 16,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                margin: 10,
              }}
            />
            <View>
              <View style={{width: 200, height: 18, marginTop: 18}} />
              <View style={{width: 100, height: 16, marginTop: 8}} />
            </View>
          </View>

          <View
            style={{
              height: 30,
              width: 6,
              marginTop: 20,
              marginRight: 8,
            }}
          />
        </View>
      </SkeletonPlaceholder>
      {/* </View> */}
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // paddingTop: 4,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   item: {
//     height: 200,
//     width: '100%',
//   },
//   title: {
//     fontSize: 18,
//     paddingLeft: 6,
//     paddingTop: 10,
//     shadowOpacity: 0,
//   },
// })
