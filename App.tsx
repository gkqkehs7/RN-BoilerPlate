import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppInner from 'AppInner';
import {NavigationContainer} from '@react-navigation/native';

import './global.css';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
