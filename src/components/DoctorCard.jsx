import React from "react";
import {
  Box,
  Text,
  Image,
  Pressable,
  Center,
  HStack,
  AspectRatio,
  VStack,
} from "native-base";
import { Dimensions } from "react-native";

const DoctorCard = ({ doctor }) => {
  const width = Dimensions.get("window").width;

  return (
    <Pressable width={width - 20}>
      <Box bg="white" shadow={1} rounded="lg" mt={3}>
        <HStack>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            w={32}
            h={32}
            alt="image"
            roundedTopLeft="lg"
          />
          <VStack>
            <Text>{doctor.name}</Text>
            <Text>{doctor.specialty}</Text>
            <Text>{doctor.address}</Text>
            <Text>{doctor.phone}</Text>
            <Text>{doctor.email}</Text>
            <Text>{doctor.price}</Text>
          </VStack>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default DoctorCard;
