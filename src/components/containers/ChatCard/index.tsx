import { Text, TouchableOpacity, View } from "react-native"
import SChatCard from "./ChatCard.styles";
import Layout from "../../sections/Layout";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

/**
 * TODO: make avatar standalone component with variants
 * TODO: make dynamic
 * 
 * @returns JSX
 */
const ChatCard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity style={SChatCard.button} onPress={() => navigation.navigate('ChatMain')}>
      <Layout>
        <View style={SChatCard.container}>
          <View style={SChatCard.avatar}></View>
          <View style={SChatCard.content}>
            <Text style={SChatCard.title}>name</Text>
            <Text style={SChatCard.meta}>lorem ipsum dolor si...</Text>
          </View>
        </View>
      </Layout>
    </TouchableOpacity>
  )
}

export default ChatCard;