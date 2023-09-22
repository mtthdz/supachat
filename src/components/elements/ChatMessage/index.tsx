import React from 'react';
import { View, Text } from 'react-native';
import SMessage from './Message.styles';

interface props {
  body: String,
  sent?: boolean,
}

const ChatMessage = ({ body, sent }: props) => {
  return (
    <View style={SMessage.view}>
      <Text style={SMessage.text}>{body}</Text>
    </View>
  );
};

export default ChatMessage;
