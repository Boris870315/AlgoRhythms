import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import YourComponent from './TestPage'

function App(): React.JSX.Element {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabItems = [
    { label: 'Home', key: 'home' },
    { label: 'Profile', key: 'profile' },
    { label: 'Settings', key: 'settings' },
  ];

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    //<YourComponent/>
  );
}

export default App;
