import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowUp, faPen } from '@fortawesome/free-solid-svg-icons';
import RootNav from './navigation/RootNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { supabase } from './lib/supabase';

library.add(
  faArrowUp,
  faArrowLeft,
  faPen,
)

function App(): JSX.Element {
  const [chatList, setChatList] = useState({});

  
  useEffect(() => {
    const fetchChats = async () => {
      let { data, error } = await supabase
        .from('chat')
        .select('*')

      if (error) {
        console.log(error);

      } else if (data) {
        console.log(data);
        // setChatList(data);
      }
    }
    fetchChats();
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <RootNav />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
