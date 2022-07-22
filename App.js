import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import InitialRouter from './src/navigation/StackNavigators';

function App() {
  return (
    <NavigationContainer>
      <InitialRouter />
    </NavigationContainer>
  );
}

export default App;
