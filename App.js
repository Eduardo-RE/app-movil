import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation.jsx";
import { NativeBaseProvider } from "native-base";
import { AuthContextProvider } from "./src/context/AuthContext.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <NativeBaseProvider>
            <AuthContextProvider>
              <MainNavigation />
            </AuthContextProvider>
          </NativeBaseProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider >
  );
}
