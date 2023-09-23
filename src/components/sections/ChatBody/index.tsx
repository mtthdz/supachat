import { ScrollView, Text } from "react-native"
import ChatMessage from "../../elements/ChatMessage"
import SChatBody from "./ChatBody.styles";
import Layout from "../Layout";
import { chatData } from "../../../api/chatData";
import ChatTimestamp from "../../containers/ChatTimestamp";

/**
 * TODO: add automatic scrolling to bottom of chat window
 * 
 * @returns JSX
 */
const ChatBody = () => {
  const data = chatData;

  return (
    <ScrollView
      style={SChatBody.container}>
      <Layout>
        {
          data.map((input, index) => {
            return (
              <ChatMessage body={input.message} key={index} />
            );
          })
        }
        <ChatTimestamp />
      </Layout>
    </ScrollView>
  );
};

export default ChatBody;
