import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import BlockScreen from "../blockScreen/Index";
import { firebaseapp } from "../../utils/firebase";
import { getAuth } from "firebase/auth";

const FavoritesScreen = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const auth = getAuth(firebaseapp);

  React.useEffect(() => {
    console.log("authG.currentUser", auth.currentUser);
    if (auth.currentUser) {
      setLoggedIn(true);
    }
  }, [auth]);

  return (
    <>
      {loggedIn ? (
        <Box safeArea></Box>
      ) : (
        <BlockScreen
          ScreenName={"Favoritos"}
          header={"Inicia sesión para ver tus favoritos"}
          customMessage="Puedes crear, consultar o editar listas de favoritos una vez que hayas iniciado sesión."
        />
      )}
    </>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
