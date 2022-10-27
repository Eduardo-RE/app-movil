import { Dimensions, Text, View } from "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen/Index";
import RegisterScreen from "../screens/RegisterScreen/Index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/Index";
import AppointmentScreen from "../screens/appointmentScreen/Index";
import ProfileScreen from "../screens/profile/Index";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

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
          backgroundColor: "#fff",
          borderTopWidth: 1,
        },
        tabBarIconStyle: {
          color: "#fff",
        },
        tabBarLabelStyle: {},
      }}
    >
      <Tab.Screen
        name="Explorar"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "#000",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={AppointmentScreen}
        options={{
          tabBarActiveTintColor: "#000",

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Citas"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "#000",

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bandeja de entrada"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "#000",

          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Iniciar sesión"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "#000",

          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
