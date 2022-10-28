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
} from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ClientDeailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { doctor } = route.params;
  console.log(doctor);
  const insets = useSafeAreaInsets();
  return (
    <Box bgColor={"white"} flex={1}>
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
          {doctor.name} - {doctor.specialty}
        </Text>
        <HStack space={1}>
          <Text>
            {"\u2605 "}
            {doctor.rating}
          </Text>
          <Text>{"\u2022"}</Text>
          <TouchableOpacity>
            <Text fontWeight={"medium"} underline>
              {doctor?.reviews.length} evaluaciones
            </Text>
          </TouchableOpacity>
        </HStack>
        <Text marginTop={1}>{doctor.address}</Text>
        <Divider marginTop={5} />
      </Box>
      <Box
        position={"absolute"}
        bottom={0}
        left={0}
        right={0}
        backgroundColor={"#fafbfd"}
        justifyContent={"center"}
        alignItems={"center"}
        display="flex"
      >
        <HStack justifyContent={"center"} alignItems={"center"} display="flex">
          <HStack>
            <Text fontWeight={"bold"}>$ {doctor.price} MXN</Text>
            <Text> consulta</Text>
          </HStack>
          <Button
            onPress={() => navigation.navigate("BookAppointmentScreen")}
            variant="solid"
            backgroundColor={"#000"}
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
