import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native"
import ChatForm from "../../components/sections/ChatForm"
import ChatHeader from "../../components/sections/ChatHeader"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatBody from "../../components/sections/ChatBody";
import SChatMain from "./ChatMain.styles";

const ChatMain = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom = 30,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View style={SChatMain.container}>
        <ChatHeader />
          <KeyboardAvoidingView
            style={SChatMain.flexParent}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={60}
          >
            <ChatBody />
            <ChatForm />
          </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default ChatMain;