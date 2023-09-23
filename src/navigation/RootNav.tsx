import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Login from "../components/screens/Login";
import ChatMain from "../components/screens/ChatMain";

const Stack = createNativeStackNavigator();

const RootNav = () => {
  const [login, useLogin] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        { login ? (
          <Stack.Screen name='main' component={ChatMain}/>
        ) : (
          <Stack.Screen name='login' component={Login}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNav;