import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  View, 
  Text,
  Button, 
  TabController, 
} from 'react-native-ui-lib';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello world</Text>
      </View>
      
      <View style={styles.buttonBar}>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
      </View>

      <TabController.TabBar activeBackgroundColor={Colors.blue30}/>

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

export default App;
