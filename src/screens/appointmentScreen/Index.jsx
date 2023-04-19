import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import BlockScreen from "../blockScreen/Index";
import { firebaseapp } from "../../utils/firebase";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const AppointmentScreen = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.isAuthenticated ? (
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
