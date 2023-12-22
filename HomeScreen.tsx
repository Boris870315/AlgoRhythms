import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';


type HomePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
const HomeScreen = () => {
  const navigation = useNavigation<HomePageNavigationProp>();

  const localImageSource = require('./assets/images/1.jpg');
  const navigateToPage1 = () => {
    navigation.navigate('Page1');
  };



  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello world</Text>
      </View>

      <View style={styles.buttonBar}>
        <TouchableOpacity onPress={navigateToPage1}>
          <Image
            source={localImageSource}
            style={styles.buttonMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPage1}>
          <Image
            source={localImageSource}
            style={styles.buttonMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPage1}>
          <Image
            source={localImageSource}
            style={styles.buttonMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPage1}>
          <Image
            source={localImageSource}
            style={styles.buttonMenu}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPage1}>
          <Image
            source={localImageSource}
            style={styles.buttonMenu}
          />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1, // 使 SafeAreaView 填满整个屏幕
  },
  container: {
    flex: 1, // 填满除了按钮栏之外的所有空间
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonBar: {
    position: 'absolute', // 绝对定位
    bottom: 0,            // 定位到底部
    flexDirection: 'row', // 按钮水平排列
    width: '100%',        // 宽度填满屏幕
    justifyContent: 'space-evenly', // 按钮间均匀分布
  },
  buttonMenu: {
    width: 50, // 按钮宽度
    height: 50, // 按钮高度
    borderRadius: 50 / 2, // 圆形按钮的圆角
    backgroundColor: '#0000ff', // 按钮背景色，这里设置为蓝色
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  }
});

export default HomeScreen;