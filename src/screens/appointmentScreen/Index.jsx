import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import BlockScreen from "../blockScreen/Index";

const AppointmentScreen = () => {
  const loggedIn = false;

  return (
    <>
      {loggedIn ? (
        <Box safeArea></Box>
      ) : (
        <BlockScreen
          ScreenName={"Viajes"}
          header={"Todavía no tienes ninguna cita"}
          customMessage="Cuando quieras planear tu proxima cita, estaremos aqui para ayudarte."
        />
      )}
    </>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
