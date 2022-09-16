// import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Box, Button, Center, Text, VStack, HStack, Link } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import { FormHook } from "../../hooks/formHook";
import { globalStyles } from "../../styles/globalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { form, onChange } = FormHook();
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
  );

  const onSubmit = () => {
    setErrorMessage("");

    if (!form.email || !form.password) {
      setErrorMessage("Favor de llenar todos los campos");
      return;
    }

    if (form.email.search(emailRegex) === -1) {
      setErrorMessage("Favor de ingresar un correo válido");
    }
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
          <Button onPress={onSubmit}>Iniciar sesion</Button>
        </VStack>

        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            style={{
              color: "warmGray.200",
              ...globalStyles.text,
            }}
          >
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
