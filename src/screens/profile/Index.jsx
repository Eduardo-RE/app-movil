import { Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Button, Divider, HStack, Image, Text, VStack } from "native-base";
import { Ionicons, Feather } from "@expo/vector-icons";
const ProfileScreen = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <Box safeArea bgColor="white" flex={1} paddingX={5}>
      <Box mt={height * 0.05}>
        <Text fontWeight={"semibold"} fontSize="3xl" mb={2}>
          Perfil
        </Text>
        <Text fontWeight={"thin "}>
          Inicia sesión para empezar a planear tu próxima cita.
        </Text>
      </Box>
      <VStack space={4}>
        <Button mt={height * 0.05} colorScheme="primary">
          Iniciar sesión
        </Button>
        <HStack space={1}>
          <Text fontSize={"sm"}>¿No tienes una cuenta?</Text>
          <TouchableOpacity>
            <Text fontSize={"sm"} underline>
              Registrate
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
      <HStack alignItems="center" mt={height * 0.05}>
        <Image
          alt="image base"
          source={{
            uri: "https://img.icons8.com/color/48/000000/cash-in-hand.png",
          }}
          width={"35px"}
          height={"35px"}
        />
        <VStack ml={width * 0.05}>
          <Text fontWeight="medium" fontSize={"xs"}>
            Gana dinero siendo un proveedor de servicios
          </Text>
          <Text fontWeight="bold" fontSize={"xs"} underline>
            Más información
          </Text>
        </VStack>
      </HStack>
      <Divider marginTop={10} mb={2} />
      <TouchableOpacity>
        <HStack justifyContent={"space-between"}>
          <HStack space={2}>
            <Ionicons name="settings-outline" size={24} color="black" />
            <Text>Configuración</Text>
          </HStack>

          <Ionicons name="ios-chevron-forward" size={24} color="black" />
        </HStack>
      </TouchableOpacity>
      <Divider marginTop={2} />
      <TouchableOpacity>
        <HStack justifyContent={"space-between"} mt={2}>
          <HStack space={2}>
            <Feather name="help-circle" size={24} color="black" />
            <Text>Recibir ayuda</Text>
          </HStack>

          <Ionicons name="ios-chevron-forward" size={24} color="black" />
        </HStack>
      </TouchableOpacity>
    </Box>
  );
};

export default ProfileScreen;
