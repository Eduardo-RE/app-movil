import { Dimensions, Text, View } from "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen/Index";
import RegisterScreen from "../screens/RegisterScreen/Index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/Index";
import AppointmentScreen from "../screens/appointmentScreen/Index";
import ProfileScreen from "../screens/profile/Index";
import {MaterialIcons, Ionicons, FontAwesome5} from "@expo/vector-icons";


const height = Dimensions.get("window").height;

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="auth" component={AuthStackNavigator} />
      <Stack.Screen name="home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> */}
    </AuthStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          margin: height * 0.01,
          marginTop: height * 0.02,
          bottom: height * 0.02,
          borderRadius: 20,
          backgroundColor: "#121725",
          borderTopWidth: 0,
          height: height * 0.1,
        },
        tabBarIconStyle: {
          color: "#fff",
          top: Platform.OS === "ios" ? height * 0.01 : 0.001,
        },
        tabBarLabelStyle: {
          top: Platform.OS === "android" ? height * -0.02 : height * 0.0011,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "#FF3B2F",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={AppointmentScreen}
        options={{
          tabBarActiveTintColor: "#FF3B2F",

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "#FF3B2F",

          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
