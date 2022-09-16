import { Text, View } from "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen/Index";
import RegisterScreen from "../screens/RegisterScreen/Index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
