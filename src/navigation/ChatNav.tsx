import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatHome from "../screens/ChatHome";
import ChatMain from "../screens/ChatMain";

const Stack = createNativeStackNavigator();

const ChatNav = () => {
  return (
    <Stack.Navigator
      initialRouteName='main'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='ChatHome' component={ChatHome}/>
      <Stack.Screen name='ChatMain' component={ChatMain}/>
    </Stack.Navigator>
  );
};

export default ChatNav;