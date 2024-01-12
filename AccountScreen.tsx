import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Text } from 'react-native-ui-lib';
import  MenuBar from './MenuBar'
import TopBar from './TopBar';

function Account(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <TopBar/>
      <Text style={styles.textStyle}>PAGE Account</Text>
      <MenuBar/>
    </SafeAreaView>
  );
}

//setup the layout of the screen 
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

export default Account;