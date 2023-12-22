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
} from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';


type HomePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
const HomeScreen = () => {
  const navigation = useNavigation<HomePageNavigationProp>();

  const navigateToPage1 = () => {
    navigation.navigate('Page1');
  };


    return (
      <SafeAreaView style={styles.fullScreen}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello world</Text>
      </View>
      
      <View style={styles.buttonBar}>
        <Button label={'Go to Page 1'} size={Button.sizes.medium} backgroundColor={Colors.red30} onPress={navigateToPage1}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
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
    textStyle:{
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
  });

export default HomeScreen;