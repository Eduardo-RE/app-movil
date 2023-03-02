import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import BlockScreen from "../blockScreen/Index";
import { firebaseapp } from "../../utils/firebase";
import { getAuth } from "firebase/auth";

const MessagesScreen = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const auth = getAuth(firebaseapp);

  React.useEffect(() => {
    console.log("authG.currentUser", auth.currentUser);
    if (auth.currentUser) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {loggedIn ? (
        <Box safeArea></Box>
      ) : (
        <BlockScreen
          ScreenName={"Bandeja de entrada"}
          header={"Inicia sesión para ver los mensajes"}
          customMessage="Cuando inicies sesión, podrás ver los mensajes importantes acerca de tus citas y consultas."
        />
      )}
    </>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
