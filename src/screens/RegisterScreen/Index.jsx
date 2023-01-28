import React, { useState } from "react";
import { Box, Button, Center, Text, VStack, HStack, Link } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import { FormHook } from "../../hooks/formHook";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { form, onChange } = FormHook();
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
  );

  const onSubmit = () => {
    // validate forms
    if (
      form.nombre === "" ||
      form.apellido === "" ||
      form.telefono === "" ||
      form.mail === "" ||
      form.password === "" ||
      form.confirmPassword === ""
    ) {
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    if (!emailRegex.test(form.mail)) {
      setErrorMessage("El correo electronico no es valido");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    console.log(form);
  };

  return (
    <Center w="100%" bg={"#fff"} flex={1}>
      <Box safeArea p="3" w="100%" maxW="390">
        <VStack space={3}>
          <CustomInput
            label="Nombre(s)"
            type={"text"}
            onChangeText={(value) => {
              onChange({ name: "nombre", value });
            }}
          />
          <CustomInput
            label="Apellidos"
            type={"text"}
            onChangeText={(value) => {
              onChange({ name: "apellido", value });
            }}
          />
          <CustomInput
            label="Telefono"
            type={"tel"}
            onChangeText={(value) => {
              onChange({ name: "telefono", value });
            }}
          />
          <CustomInput
            label="Correo electronico"
            type={"mail"}
            onChangeText={(value) => {
              onChange({ name: "mail", value });
            }}
          />
          <CustomInput
            label="Contraseña"
            type={"password"}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />
          <CustomInput
            label="Confirmar contraseña"
            type={"password"}
            onChangeText={(value) => {
              onChange({ name: "confirmPassword", value });
            }}
          />

          <Text marginY={2} textAlign={"center"} color="red.600">
            {errorMessage}
          </Text>
          <Button onPress={onSubmit}>Registrarme</Button>
        </VStack>

        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            style={{
              color: "warmGray.200",
            }}
          >
            ¿Ya tienes una cuenta?
          </Text>
          <Link
            style={{
              color: "indigo.500",
              fontWeight: "medium",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Iniciar sesion
          </Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default RegisterScreen;
