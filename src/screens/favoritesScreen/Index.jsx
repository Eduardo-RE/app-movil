import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import BlockScreen from "../blockScreen/Index";

const FavoritesScreen = () => {
  const loggedIn = false;

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
