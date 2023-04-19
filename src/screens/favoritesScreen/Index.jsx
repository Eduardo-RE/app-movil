import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import BlockScreen from "../blockScreen/Index";
import { firebaseapp } from "../../utils/firebase";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.isAuthenticated ? (
        <Box safeArea>
          <Text>Favoritos</Text>
        </Box>
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
