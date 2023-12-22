import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Page1'; // 引入 Page1
import HomeScreen from './HomeScreen'; // 您的主頁面

//const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  HomePage: undefined;
  Page1: undefined; // 添加更多參數如果 Page1 需要
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="Page1" component={Page1} />
      {/* <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Page4" component={Page4} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
