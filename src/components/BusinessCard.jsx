import React from "react";
import { Box, Text, Image, VStack, HStack } from "native-base";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "../utils";

const BusinessCard = ({ business }) => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const allReviews = business.reviews
    ? Object.keys(business?.reviews).map((key) => business?.reviews[key])
    : [];
  const allRatings = allReviews.reduce(
    (accum, object) => accum + object.rating / allReviews.length,
    0
  );

  return (
    <TouchableOpacity
      style={{
        width: width - 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
      onPress={() => navigation.navigate("ClientDetails", { business })}
    >
      <Box bg="white" rounded="lg" mt={3}>
        <VStack space={2}>
          <Image
            source={{
              uri: business.photos
                ? Object.keys(business?.photos).map(
                    (item) => business?.photos[item]
                  )[0]?.picture
                : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            width={width - 40}
            height={height / 2.5}
            resizeMode="cover"
            alt="image"
            rounded="lg"
          />

          <HStack
            justifyContent={"space-between"}
            style={{
              width: width - 50,
              padding: 16,
            }}
          >
            <VStack>
              <Text color={"#000"} fontWeight="bold" fontSize={"sm"}>
                {business.ubicacion}
              </Text>
              <Text fontSize={"sm"}>{business.descripcion}</Text>
              <Text fontSize={"sm"}>{business.nombre}</Text>
              <Text fontSize={"sm"}>{formatCurrency(1000, "MXN")}</Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default BusinessCard;

const styles = StyleSheet.create({});
