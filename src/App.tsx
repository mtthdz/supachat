import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChatMessage from './components/elements/ChatMessage';
import Layout from './components/sections/Layout';
import ChatTimestamp from './components/containers/ChatTimestamp';
import { chatData } from './api/chatData';

function App(): JSX.Element {
  let data = chatData;

  return (
    <SafeAreaView>
      <Layout>
        <View style={styles.view}>
          {data.map((item, index) => {
            return <ChatMessage body={item.message} key={index}/>
          })}
          <ChatTimestamp />
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
