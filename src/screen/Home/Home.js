import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {arr_data} from '../../data';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {
  const offsetXVal = useSharedValue(0);
  const offsetYVal = useSharedValue(0);
  const opacityVal = useSharedValue(0);
  const scaleVal = useSharedValue(1); // trạng thái bình thường
  const rotationVal = useSharedValue(0);
  const borderRadiusVal = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    // Di chuyển đến điểm bất kỳ bằng thay đổi vị trí XY +++++++++++++++++
    // const translateX = withSpring(offsetX.value * 255, {
    //   damping: 15,
    //   mass: 1,
    //   stiffness: 200,
    // });
    // const translateY = withSpring(offsetY.value * 255, {
    //   damping: 15,
    //   mass: 1,
    //   stiffness: 200,
    // });
    // return {
    //   transform: [{translateX}, {translateY}],
    // };
    //+++++++++++++++++++++ End di chuyển đến điểm bất kỳ bằng thay đổi vị trí XY
    // Xoay box
    // return {
    //   transform: [
    //     {
    //       rotateZ: `${rotation.value}deg`,
    //     },
    //   ],
    // };
    // End xoay box
    // Xoay box thành hình vuông và bo tròn
    // const a = withTiming();
    // return {
    //   opacity: opacityVal.value,
    //   borderRadius: borderRadiusVal.value,
    //   transform: [{scale: scaleVal.value}, {rotate: `${rotationVal.value}deg`}],
    // };
    // End xoay box thành hình vuông và bo tròn
    // Phóng to item và thu nhỏ để clear đi item
    // return {
    //   transform: [{scale: scaleVal.value}],
    // };
    // End phóng to item và thu nhỏ để clear đi item
    //Di chuyển box theo hình vòng cung
    return {
      transform: [
        {translateX: offsetXVal.value},
        {translateY: offsetYVal.value},
      ],
    };
    //End di chuyển box theo hình vòng cung
  });

  const RenderButton = ({item}) => {
    // console.log(item);
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.type == 1) {
            offsetX.value = Math.random();
            offsetY.value = Math.random();
          } else if (item.type == 2) {
            // lắc đều box
            rotation.value = withSequence(
              withTiming(-10, {duration: 50}),
              withRepeat(withTiming(60, {duration: 100}), 6, true),
              withTiming(0, {duration: 50}),
            );
          } else if (item.type == 3) {
            opacityVal.value = withSequence(withDelay(300, withTiming(1)));
            scaleVal.value = withSequence(
              withDelay(1800, withSpring(2)),
              withDelay(500, withSpring(1)),
              withDelay(600, withSpring(2)),
            );

            rotationVal.value = withSequence(
              withDelay(300, withSpring(40)),
              withDelay(100, withTiming(0, {duration: 200})),
              withDelay(1000, withTiming(-40, {duration: 200})),
              withDelay(1000, withSpring(0, {duration: 900})),
            );
            borderRadiusVal.value = withSequence(
              withDelay(300, withTiming(20)),
              withDelay(1100, withTiming(50)),
              withDelay(700, withTiming(20)),
              withDelay(1000, withTiming(0)),
            );
          } else if (item.type == 4) {
            scaleVal.value = withSequence(
              withSpring(2),
              withDelay(200, withTiming(0, {duration: 200})),
            );
          } else if (item.type == 5) {
            offsetXVal.value = withSequence(withTiming(50));
          }
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
          //   paddingHorizontal: 10,
          //   paddingVertical: 20,
          width: 100,
          height: 50,
          marginLeft: 20,
        }}>
        <Text style={{}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Text>Home window</Text> */}
      <View
        style={{
          width: '100%',
          height: '70%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {width: 100, height: 100, backgroundColor: 'yellow'},
            animatedStyle,
          ]}>
          {/* <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'green',
              borderRadius: 50,
              transform: [
                {scaleY: 1},
                {rotate: '45deg'},
                // {
                //   skewX: '100deg',
                // },
              ],
            }}></View> */}
        </Animated.View>
      </View>
      <TouchableOpacity
        onPress={() => {
          offsetXVal.value = 0;
          offsetYVal.value = 0;
          opacityVal.value = 0;
          borderRadiusVal.value = 0;
          scaleVal.value = 1;
          rotationVal.value = 0;
        }}
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'yellow',
          position: 'absolute',
          bottom: 200,
          left: 50,
        }}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          height: '30%',
          //   backgroundColor: 'blue',
          flexDirection: 'row',
          //   justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <FlatList
          data={arr_data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item.id}
          //   renderItem={({item}) => <RenderButton item={item} />}
          renderItem={({item}) => <RenderButton item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
});

export default Home;
