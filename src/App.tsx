import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChatMessage from './components/elements/ChatMessage';
import Layout from './components/sections/Layout';

function App(): JSX.Element {
  const data = [
    {message: 'hello'},
    {message: 'my name is matt'},
    {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
  ]

  return (
    <SafeAreaView>
      <Layout>
        <Text>chat</Text>
        <View style={styles.view}>
          {data.map((item, index) => {
            return <ChatMessage body={item.message} key={index}/>
          })}
        </View>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  }
})

export default App;
