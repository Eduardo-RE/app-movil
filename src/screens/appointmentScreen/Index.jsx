import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import BlockScreen from "../blockScreen/Index";

const AppointmentScreen = () => {
  const loggedIn = false;

  return (
    <>
      {loggedIn ? (
        <Box safeArea flex={1} bgColor={"white"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            Citas
          </Text>
        </Box>
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
