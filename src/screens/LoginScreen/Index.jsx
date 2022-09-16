// import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  TextArea,
  VStack,
  HStack,
  Link,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/CustomInput";
import { FormHook } from "../../hooks/formHook";
const LoginScreen = () => {
  const navigation = useNavigation();
  const { form, onChange } = FormHook();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <Center w="100%" bg={"#fff"} flex={1}>
      <Box safeArea p="3" w="100%" maxW="390">
        <VStack space={3}>
          <CustomInput
            label="Correo electronico"
            type={"text"}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
          />
          <CustomInput
            label="Contraseña"
            type={"password"}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <Text marginY={2} textAlign={"center"} color="red.600">
            {errorMessage}
          </Text>
          <Button onPress={onSubmit}>Iniciar sesion</Button>
        </VStack>

        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            Soy un usuario nuevo.{" "}
          </Text>
          <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
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
