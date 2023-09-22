import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import ChatMessage from './components/elements/ChatMessage';
import Layout from './components/sections/Layout';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Layout>
        <Text>chat</Text>
        <ChatMessage body='hello' />
      </Layout>
    </SafeAreaView>
  );
}

export default App;
