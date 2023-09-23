import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Login from "../screens/Login";
import ChatNav from "./ChatNav";

const Stack = createNativeStackNavigator();

const RootNav = () => {
  const [login, useLogin] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        { login ? (
          <Stack.Screen name='main' component={ChatNav}/>
        ) : (
          <Stack.Screen name='login' component={Login}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNav;