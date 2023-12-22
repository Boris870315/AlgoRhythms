import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
  } from 'react-native';
import { Text } from 'react-native-ui-lib';

function Page1(): React.JSX.Element {

    return(
        <SafeAreaView style={styles.fullScreen}>
      <Text style={styles.textStyle}>PAGE 1</Text>
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

export default Page1;