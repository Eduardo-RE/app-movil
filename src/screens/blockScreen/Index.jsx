import React from "react";
import { Box, Button, Text } from "native-base";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BlockScreen = ({ ScreenName, header, customMessage }) => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  return (
    <Box
      safeArea
      style={{
        margin: 20,
      }}
    >
      <Text fontSize={"3xl"} fontWeight="semibold">
        {ScreenName}
      </Text>

      <Text fontSize={"md"} fontWeight="semibold" mt={10}>
        {header}
      </Text>
      <Text fontSize={"md"} fontWeight="light" mt={1}>
        {customMessage}
      </Text>
      <Button
        mt={10}
        variant={"solid"}
        colorScheme={"primary"}
        width={width * 0.3}
        onPress={() => navigation.navigate("Login")}
      >
        Iniciar sesión
      </Button>
    </Box>
  );
};

export default BlockScreen;
