import React from "react";
import LoginScreen from "../screens/LoginScreen/Index";
import RegisterScreen from "../screens/RegisterScreen/Index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/Index";
import AppointmentScreen from "../screens/appointmentScreen/Index";
import ProfileScreen from "../screens/profile/Index";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import ClientDeailScreen from "../screens/ClientDetailScreen/Index";
import MessagesScreen from "../screens/messagesScreen/Index";
import FavoritesScreen from "../screens/favoritesScreen/Index";
import BookAppointment from "../screens/bookAppointment/Index";
import { Text } from "react-native";
import Navbar from "../components/Navbar";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
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
        component={HomeStackNavigator}
        options={{
          tabBarActiveTintColor: "#000",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritesScreen}
        options={{
          tabBarActiveTintColor: "#000",

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Citas"
        component={AppointmentScreen}
        options={{
          tabBarActiveTintColor: "#000",

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bandeja de entrada"
        component={MessagesScreen}
        options={{
          tabBarActiveTintColor: "#000",

          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Iniciar sesión"
        component={AuthStackNavigator}
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

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = ({ navigation, route }) => {
  React.useEffect(() => {
    const tabHiddenRoutes = ["ClientDetails", "ClientDetails"];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({
        headerShown: false,
        tabBarStyle: { position: "absolute", bottom: -1000000 },
        tabBarIconStyle: {},
        tabBarLabelStyle: {},
      });
    } else {
      navigation.setOptions({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
        },
        tabBarIconStyle: {
          color: "#fff",
        },
        tabBarLabelStyle: {},
      });
    }
  }, [navigation, route]);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ClientDetails"
        component={ClientDeailScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={{
          header: (props) => <Navbar props={props} />,
          title: "Confirmar cita",
        }}
      />
    </HomeStack.Navigator>
  );
};
