import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation.jsx";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MainNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
