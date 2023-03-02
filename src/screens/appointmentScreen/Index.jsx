import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import BlockScreen from "../blockScreen/Index";
import { firebaseapp } from "../../utils/firebase";
import { getAuth } from "firebase/auth";

const AppointmentScreen = () => {
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
