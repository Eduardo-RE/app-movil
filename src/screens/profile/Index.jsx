import { StyleSheet, Text } from "react-native";
import React from "react";
import { Box, Button } from "native-base";
import ProfileBlockScreen from "../profileBlockScreen/Index";
import { useDispatch, useSelector } from "react-redux";
import { CerrarSesion } from "../../redux/actions/authActions";
const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.isAuthenticated ? (
        <Box safeArea>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            Perfil
          </Text>
          <Button
            onPress={async () => {
              await auth.signOut();
              dispatch(CerrarSesion());
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
