import { Text, View } from "react-native"
import SMainHeader from "./MainHeader.styles";
import Layout from "../Layout";

const MainHeader = () => {
  const onPress = () => {
    console.log('new chat');
  }

  return (
    <View style={SMainHeader.container}>
      <Layout>
        <View style={SMainHeader.flexParent}>
        <Text>supachat</Text>
        </View>
      </Layout>
    </View>
  )
}

export default MainHeader;