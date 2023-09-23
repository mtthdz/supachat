import { Text, TouchableOpacity, View } from "react-native"
import SChatHeader from "./ChatHeader.styles";
import Layout from "../Layout";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Avatar from "../../elements/Avatar";

const ChatHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    <View style={SChatHeader.container}>
      <Layout>
        <View style={SChatHeader.flexParent}>
        <TouchableOpacity
          style={SChatHeader.button}
          onPress={() => navigation.navigate('ChatHome')}
        >
          <FontAwesomeIcon icon={'arrow-left'} size={14} style={SChatHeader.buttonIcon}/>
          <Avatar />
          <Text style={SChatHeader.buttonText}>user</Text>
        </TouchableOpacity>
        </View>
      </Layout>
    </View>
  )
};

export default ChatHeader;
