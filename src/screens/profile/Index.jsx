import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Button } from "native-base";
import { firebaseapp } from "../../utils/firebase";
import ProfileBlockScreen from "../profileBlockScreen/Index";
import { getAuth } from "firebase/auth";

const ProfileScreen = () => {
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
        <Box safeArea>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            Perfil
          </Text>
          <Button
            onPress={() => {
              auth.signOut();
              setLoggedIn(false);
            }}
          >
            <Text>Logout</Text>
          </Button>
        </Box>
      ) : (
        <ProfileBlockScreen />
      )}
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
