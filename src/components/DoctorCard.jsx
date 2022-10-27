import React from "react";
import {
  Box,
  Text,
  Image,
  Pressable,
  AspectRatio,
  VStack,
  HStack,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";

const DoctorCard = ({ doctor }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <Pressable width={width - 20} justifyContent="center" alignItems={"center"}>
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
              {doctor.status}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({});
