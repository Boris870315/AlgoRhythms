import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View, 
} from 'react-native';
import { Text } from 'react-native-ui-lib';
import  MenuBar from './MenuBar'

const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello world</Text>
      </View>
      <MenuBar/>
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
});

export default HomeScreen;