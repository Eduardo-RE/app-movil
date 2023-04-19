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
import { globalStyles } from "../../styles/globalStyles";
import { UserAuth } from "../../context/AuthContext";
import { database, firebaseapp } from "../../utils/firebase";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { ref, get, child } from "firebase/database";
import { useDispatch } from "react-redux";
import { AutenticarUsuario } from "../../redux/actions/authActions";

const LoginScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth(firebaseapp);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser, setDbuser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dbRef = ref(database);

  const signIn = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Favor de llenar todos los campos");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (authUser) => {
        await setUser(authUser.user);
        get(child(dbRef, `/clientes/${authUser.user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              dispatch(AutenticarUsuario(snapshot.val()));
              navigation.navigate("Home");
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((err) => alert(err.message));
  };

  React.useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        navigation.navigate("Profile");
      }
    });
  }, []);

  if (auth.onAuthStateChanged)
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
              onChangeText={(value) => setEmail(value)}
            />
            <CustomInput
              label="Contraseña"
              type={"password"}
              onChangeText={(value) => setPassword(value)}
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
