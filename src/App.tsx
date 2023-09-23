import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowUp, faPen } from '@fortawesome/free-solid-svg-icons';
import RootNav from './navigation/RootNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';

library.add(
  faArrowUp,
  faArrowLeft,
  faPen,
)

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
        <RootNav />
    </SafeAreaProvider>
  );
}

export default App;
