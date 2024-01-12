import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

// this is the start page 
function App(): React.JSX.Element {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabItems = [
    { label: 'Home', key: 'home' },
    { label: 'Profile', key: 'profile' },
    { label: 'Settings', key: 'settings' },
  ];

  return (
    //start with the navigation and the home page 
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
