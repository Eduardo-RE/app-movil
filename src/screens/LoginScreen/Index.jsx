// import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Text,
  VStack,
  HStack,
  Link,
  Image,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import { FormHook } from "../../hooks/formHook";
import { globalStyles } from "../../styles/globalStyles";
import { UserAuth } from "../../context/AuthContext";
import {
  database,
  auth,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "../../utils/firebase";
import { ref, get, child } from "firebase/database";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { form, onChange } = FormHook();
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
  );

  const { user, setUser, setDbuser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dbRef = ref(database);

  const signIn = (e) => {
    e.preventDefault();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password)
          .then(async (authUser) => {
            await setUser(authUser.user);
            get(child(dbRef, `clientes/${auth.currentUser.uid}`))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  setDbuser(snapshot.val());
                  navigate("Home");
                } else {
                  console.log("No data available");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((err) => alert(err.message));
      })
      .catch((err) => alert(err.message));
  };

  // const onSubmit = () => {
  //   setErrorMessage("");

  //   if (!form.email || !form.password) {
  //     setErrorMessage("Favor de llenar todos los campos");
  //     return;
  //   }

  //   if (form.email.search(emailRegex) === -1) {
  //     setErrorMessage("Favor de ingresar un correo válido");
  //   }
  //   navigation.navigate("home");
  // };

  return (
    <Center w="100%" bg={"#fff"} flex={1}>
      <Image
        source={require("../../images/logo.jpeg")}
        alt="Alternate Text"
        size="xl"
      />
      <Box safeArea p="3" w="100%" maxW="390">
        <VStack space={3}>
          <CustomInput
            label="Correo electronico"
            type={"text"}
            autoCapitalize="none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            label="Contraseña"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            style={{
              fontWeight: "500",
              color: "indigo.500",
              ...globalStyles.text,
            }}
            alignSelf="flex-end"
            mt="1"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <Text marginY={2} textAlign={"center"} color="red.600">
            {errorMessage}
          </Text>
          <Button bg="green.500" onPress={signIn}>
            <Text>Iniciar sesion</Text>
          </Button>
        </VStack>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600">
            Soy un usuario nuevo.{" "}
          </Text>
          <Link
            style={{
              color: "indigo.500",
              fontWeight: "medium",
              ...globalStyles.text,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            Registrarme
          </Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
