import { TextInput, View } from "react-native"
import SChatForm from "./ChatForm.styles";
import IconButton from "../../elements/IconButton";
import Layout from "../Layout";

const ChatForm = () => {
  const onChangeText = () => {
    console.log('it works');
  }

  const submit = () => {
    console.log('submit');
  }

  return (
    <View style={SChatForm.container}>
      <Layout>
        <View style={SChatForm.flexParent}>
          <TextInput
            style={SChatForm.input}
            onChangeText={onChangeText}
            placeholder={'Message...'}
            multiline={true}
          />
          <IconButton icon={'arrow-up'} onPress={submit} />
        </View>
      </Layout>
    </View>
  );
};

export default ChatForm;
