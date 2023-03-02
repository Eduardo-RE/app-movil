import React from "react";
import {
  View,
  Text,
  Box,
  Image,
  AspectRatio,
  HStack,
  Link,
  Divider,
  Button,
  VStack,
  ScrollView,
} from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { formatCurrency } from "../../utils";

const ClientDeailScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const { height } = Dimensions.get("window");
  const { doctor } = route.params;

  return (
    <Box bgColor={"white"} flex={1}>
      <ScrollView>
        <Box
          style={{
            position: "absolute",
            top: insets.top,
            left: 10,
            zIndex: 1,
            borderRadius: 50,
            width: 25,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-chevron-back-outline" size={18} color="black" />
          </TouchableOpacity>
        </Box>
        <Box
          style={{
            position: "absolute",
            top: insets.top,
            right: 10,
            zIndex: 1,
            borderRadius: 50,
            width: 25,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="favorite-border" size={16} color="black" />
          </TouchableOpacity>
        </Box>
        <Box
          style={{
            position: "absolute",
            top: insets.top,
            right: 50,
            zIndex: 1,
            borderRadius: 50,
            width: 25,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <EvilIcons name="share-apple" size={18} color="black" />
          </TouchableOpacity>
        </Box>
        <AspectRatio ratio={16 / 11}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            resizeMode="cover"
            alt="image"
          />
        </AspectRatio>
        <Box padding={5}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {doctor.nombre}
          </Text>
          <HStack space={1}>
            <Text>
              {"\u2605 "}
              {doctor.rating === "Nuevo"
                ? "Nuevo"
                : doctor.rating > 4.9
                ? "Popular"
                : doctor.rating}
            </Text>
            <Text>{"\u2022"}</Text>
            <TouchableOpacity>
              <Text fontWeight={"medium"} underline>
                {doctor.calificacion === "Nuevo" || doctor.calificacion === null
                  ? 0
                  : doctor?.reviews.length}{" "}
                evaluaciones
              </Text>
            </TouchableOpacity>
          </HStack>
          <Text marginTop={1}>{doctor.address}</Text>
          <Divider marginTop={5} />
          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            Acerca de
          </Text>
          <Text marginTop={2} fontSize={"md"} fontWeight={"medium"}>
            {doctor.descripcion}
          </Text>
          <Divider marginTop={5} />
          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            Servicios
          </Text>
          {/* {doctor.servicios &&
            doctor?.services.map((service) => (
              <HStack
                marginTop={2}
                space={2}
                alignItems={"center"}
                key={service.id}
              >
                <Box
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    backgroundColor: "#F2F2F2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="ios-checkmark" size={12} color="black" />
                </Box>
                <Text fontSize={"md"} fontWeight={"medium"}>
                  {service.name}
                </Text>
              </HStack>
            ))} */}
          <Button marginTop={5} variant={"solid"} colorScheme={"green"}>
            Ver más
          </Button>

          <Divider marginTop={5} />

          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            Dónde nos ubicamos
          </Text>
          <Text marginTop={2} fontSize={"md"} fontWeight={"medium"}>
            {doctor.ubicacion}
          </Text>
          <Divider marginTop={5} />
          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            {"\u2605 "}
            {doctor.calificacion === "Nuevo"
              ? "Nuevo"
              : doctor.calificacion > 4.9
              ? "Popular"
              : doctor.calificacion}
            {" \u2022 "}
            {doctor.calificacion === "Nuevo" || doctor.calificacion === null
              ? 0
              : doctor?.reviews.length}{" "}
          </Text>
          <Divider marginTop={5} />
        </Box>
      </ScrollView>
      <Box
        style={{
          position: "relative",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HStack justifyContent={"center"} alignItems={"center"}>
          <HStack>
            <Text fontWeight={"bold"}>{formatCurrency(1000, "MXN")}</Text>
            <Text fontWeight={"thin"}> consulta</Text>
          </HStack>
          <Button
            onPress={() => console.log("pressed")}
            variant="solid"
            colorScheme="green"
            size="lg"
            width={Dimensions.get("window").width / 3}
            height={50}
            marginLeft={5}
            marginRight={5}
            marginTop={5}
            marginBottom={5}
            borderRadius={10}
          >
            Reservar cita
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ClientDeailScreen;
