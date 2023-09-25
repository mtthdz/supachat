import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowUp, faPen } from '@fortawesome/free-solid-svg-icons';
import RootNav from './navigation/RootNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

library.add(
  faArrowUp,
  faArrowLeft,
  faPen,
)

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <RootNav />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
