import React from 'react';
import { Image } from 'react-native-ui-lib';

const YourComponent = () => {
  
  const localImageSource = require('./assets/images/1.jpg');

  return (
    <Image
      source={localImageSource}
      style={{ width: 100, height: 100 }}
      
    />
  );
};

export default YourComponent;
