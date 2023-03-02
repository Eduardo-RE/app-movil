import React, { useState } from "react";
import { Box, Button, Center, Text, VStack, HStack, Link } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import { FormHook } from "../../hooks/formHook";
import { ref, set } from "firebase/database";
import {
  auth,
  database,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../utils/firebase";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigation = useNavigation();

  const { form, onChange } = FormHook();
  const [errorMessage, setErrorMessage] = useState("");

  // const emailRegex = new RegExp(
  //   "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
  // );

  const onSubmit = async () => {
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

    // if (!emailRegex.test(form.mail)) {
    //   setErrorMessage("El correo electronico no es valido");
    //   return;
    // }

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) =>
        set(ref(database, "clientes/ " + authUser.user.uid), {
          id: authUser.user.uid,
          nombre: name,
          apellidos: lastName,
          correo: email,
          contraseña: password,
          telefono: phone,
          calificacion: "Nuevo",
        }).then(() =>
          signInWithEmailAndPassword(auth, email, password).then(() =>
            navigation.navigate("Home")
          )
        )
      )
      .catch((err) => alert(`error create user ${err.message}`));
  };

  return (
    <Center w="100%" bg={"#fff"} flex={1}>
      <Box safeArea p="3" w="100%" maxW="390">
        <VStack space={3}>
          <CustomInput
            label="Nombre(s)"
            type={"text"}
            onChangeText={(value) => setName(value)}
          />
          <CustomInput
            label="Apellidos"
            type={"text"}
            onChangeText={(value) => setLastName(value)}
          />
          <CustomInput
            label="Telefono"
            type={"tel"}
            onChangeText={(value) => setPhone(value)}
          />
          <CustomInput
            label="Correo electronico"
            type={"mail"}
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
          />
          <CustomInput
            label="Contraseña"
            type={"password"}
            autoCapitalize="none"
            onChangeText={(value) => setPassword(value)}
          />

          <Text marginY={2} textAlign={"center"} color="red.600">
            {errorMessage}
          </Text>
          <Button bg="green.500" onPress={onSubmit}>
            Registrarme
          </Button>
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
              cursor: "pointer",
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
