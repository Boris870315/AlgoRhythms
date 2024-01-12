import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// insert all the using page
import Market from './MarketScreen'; 
import HomeScreen from './HomeScreen'; 
import Account from './AccountScreen';
import WatchList from './WatchListScreen';
import Trade from './TradeScreen';

export type RootStackParamList = {
  HomePage: undefined;
  MarketPage: undefined;
  TradePage: undefined;
  AccountPage: undefined;
  WatchListPage: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    //adding the pages that is for jumping to another page 
    //set the starting page as HomePage
    <Stack.Navigator initialRouteName="HomePage">

      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="MarketPage" component={Market} />
      <Stack.Screen name="TradePage" component={Trade} />
      <Stack.Screen name="AccountPage" component={Account} />
      <Stack.Screen name="WatchListPage" component={WatchList} /> 

    </Stack.Navigator>
  );
};

export default AppNavigator;
