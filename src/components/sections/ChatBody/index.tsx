import { useRef } from "react";
import { Keyboard, ScrollView } from "react-native"
import ChatMessage from "../../elements/ChatMessage"
import SChatBody from "./ChatBody.styles";
import Layout from "../Layout";
import ChatTimestamp from "../../containers/ChatTimestamp";

/**
 * @returns JSX
 */
const ChatBody = () => {

  /**
   * Keyboard scroll functionality
   * Notes:
   * - we want the user to see the latest messages when opened
   * - when keyboard is opened, KeyboardAvoidingView (ChatMain)
   *   doesn't extend functionality to this sibling component
   * - we've added a keyboard open listener to autoscroll down
   * - (TS) useRef requires a type. Avoiding 'any', we can use
   *   the actual type.
   * https://stackoverflow.com/questions/64532946/adding-type-for-useref-on-scrollview-react-native
   */
  const scrollViewRef = useRef<ScrollView>(null);

  Keyboard.addListener("keyboardWillShow", () => {
    scrollViewRef.current?.scrollToEnd();
  })

  return (
      <ScrollView
        style={SChatBody.container}
        ref={scrollViewRef}
        onContentSizeChange={() => {scrollViewRef.current?.scrollToEnd()}}
      >
        <Layout>
          <ChatTimestamp />
        </Layout>
      </ScrollView>
  );
};

export default ChatBody;
