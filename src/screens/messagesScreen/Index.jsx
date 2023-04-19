import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import BlockScreen from "../blockScreen/Index";
import { useSelector } from "react-redux";

const MessagesScreen = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.isAuthenticated ? (
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
