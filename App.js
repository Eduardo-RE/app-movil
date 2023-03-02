import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation.jsx";
import { NativeBaseProvider } from "native-base";
import { AuthContextProvider } from "./src/context/AuthContext.jsx";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthContextProvider>
          <MainNavigation />
        </AuthContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
