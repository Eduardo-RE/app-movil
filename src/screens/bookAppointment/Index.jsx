import { useRoute } from "@react-navigation/native";
import { Box, Button, Divider, HStack, VStack } from "native-base";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BookAppointment = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const Dimensions = useWindowDimensions();

  const { business } = route.params;

  return (
    <ScrollView>
      <Box style={[style.container]}>
        <HStack
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            width: "100%",
          }}
        >
          <Image
            source={{
              uri: business.photos
                ? Object.keys(business?.photos).map(
                    (item) => business?.photos[item]
                  )[0]?.picture
                : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            style={{
              width: 120,
              height: 80,
              borderRadius: 10,
            }}
          />
          <VStack
            style={{
              marginLeft: 8,
            }}
          >
            <Text>{business.nombre}</Text>
            <Text
              style={{
                marginTop: 10,
                width: Dimensions.width - 150,
              }}
            >
              {business.descripcion}
            </Text>
          </VStack>
        </HStack>
      </Box>
      <Box style={[style.container, { marginTop: 10 }]}>
        <Text>Tu cita</Text>
        <Text>Fechas</Text>
      </Box>

      <Box style={[style.container, { marginTop: 10 }]}>
        <Text>Tu Total</Text>
      </Box>
      <Box style={[style.container, { marginTop: 10 }]}>
        <Text>Pagar con</Text>
      </Box>
      <Box style={[style.container, { marginTop: 10 }]}>
        <Text>Politica de cancelacion</Text>
      </Box>
      <Box style={[style.container, { marginTop: 10 }]}>
        <Text>Disclaimer</Text>
      </Box>
      <Box style={[style.container, { marginTop: 10 }]}>
        <Text>politicas de privacidad, terminos y condiciones</Text>
      </Box>
      <Button
        onPress={() => navigation.navigate("BookAppointment", { business })}
        variant="solid"
        colorScheme={"primary"}
        size="lg"
        width={Dimensions.width / 1.1}
        height={50}
        borderRadius={10}
        marginTop={10}
        alignSelf="center"
      >
        Confirmar reservacion
      </Button>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default BookAppointment;
