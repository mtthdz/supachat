import { Text, TextInput, TouchableOpacity, View } from "react-native"
import SChatForm from "./ChatForm.styles";
import IconButton from "../../elements/IconButton";

const ChatForm = () => {
  const onChangeText = () => {
    console.log('it works');
  }

  const submit = () => {
    console.log('submit');
  }

  return (
    <View style={SChatForm.container}>
      <TextInput
        style={SChatForm.input}
        onChangeText={onChangeText}
        placeholder={'Message...'}
      />
      <IconButton icon={'arrow-up'} onPress={submit} />
    </View>
  );
};

export default ChatForm;
