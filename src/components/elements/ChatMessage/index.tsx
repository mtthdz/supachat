import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import SMessage from './Message.styles';

interface props {
  body: String,
  sent?: boolean,
}

const ChatMessage = ({ body, sent }: props) => {
  return (
    <TouchableOpacity
      style={SMessage.view}
      onLongPress={() => {
        console.log('test');
      }}
    >
      <Text style={SMessage.text}>{body}</Text>
    </TouchableOpacity>
  );
};

export default ChatMessage;
