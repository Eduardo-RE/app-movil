import React from "react";
import { Box, Text, Image, VStack, HStack } from "native-base";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
                {doctor.address}
              </Text>
              <Text fontSize={"sm"}>{doctor.specialty}</Text>
              <Text fontSize={"sm"}>{doctor.name}</Text>
              <Text fontSize={"sm"}>{doctor.price}</Text>
            </VStack>
            <Text fontSize={"sm"}>
              {"\u2605"}
              {doctor.rating === 0
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