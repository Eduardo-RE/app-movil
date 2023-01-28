import React from "react";
import { Box, Text, Image, VStack, HStack } from "native-base";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "../utils";

const DoctorCard = ({ doctor }) => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <TouchableOpacity
      style={{
        width: width - 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
      onPress={() => navigation.navigate("ClientDetails", { doctor })}
    >
      <Box bg="white" rounded="lg" mt={3}>
        <VStack space={2}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            width={width - 40}
            height={height / 2.5}
            resizeMode="cover"
            alt="image"
            rounded="lg"
          />

          <HStack justifyContent={"space-between"}>
            <VStack>
              <Text color={"#000"} fontWeight="bold" fontSize={"sm"}>
                {doctor.ubicacion}
              </Text>
              <Text fontSize={"sm"}>{doctor.descripcion}</Text>
              <Text fontSize={"sm"}>{doctor.nombre}</Text>
              <Text fontSize={"sm"}>{formatCurrency(1000, "MXN")}</Text>
            </VStack>
            <Text fontSize={"sm"}>
              {"\u2605"}
              {doctor.rating === "Nuevo"
                ? "Nuevo"
                : doctor.rating > 4.9
                ? "Popular"
                : doctor.rating}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({});
