import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  Box,
  Image,
  AspectRatio,
  HStack,
  Divider,
  Button,
  ScrollView,
} from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { formatCurrency } from "../../utils";
import {
  Calendar,
  CalendarList,
  Agenda,
  CalendarUtils,
} from "react-native-calendars";

const INITIAL_DATE = "2022-07-06";
const ClientDeailScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const { business } = route.params;
  const allServices = business.services
    ? Object.keys(business.services).map((key) => business.services[key])
    : null;

  const allReviews = business.reviews
    ? Object.keys(business?.reviews).map((key) => business?.reviews[key])
    : [];
  const allRatings = allReviews.reduce(
    (accum, object) => accum + object.rating / allReviews.length,
    0
  );

  const getDate = (count) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: "red",
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "blue",
        selectedTextColor: "white",
      },
    };
  }, [selected]);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
    console.log(day.dateString);
  }, []);

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
              uri: business.photos
                ? Object.keys(business?.photos).map(
                    (item) => business?.photos[item]
                  )[0]?.picture
                : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            resizeMode="cover"
            alt="image"
          />
        </AspectRatio>
        <Box padding={5}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {business.nombre}
          </Text>
          <Text marginTop={1}>{business.address}</Text>
          <Divider marginTop={5} />
          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            Acerca de
          </Text>
          <Text marginTop={2} fontSize={"md"} fontWeight={"medium"}>
            {business.descripcion}
          </Text>
          <Divider marginTop={5} />
          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            Servicios
          </Text>
          {allServices?.slice(0, 2)?.map((service) => (
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
          ))}
          {allServices?.length > 3 && (
            <Button marginTop={5} variant={"solid"} colorScheme={"primary"}>
              Ver más
            </Button>
          )}

          <Divider marginTop={5} />

          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            Dónde nos ubicamos
          </Text>
          <Text marginTop={2} fontSize={"md"} fontWeight={"medium"}>
            {business.ubicacion}
          </Text>

          <Divider marginTop={5} />
          <Text marginTop={5} fontSize={"lg"} fontWeight={"bold"}>
            Fechas disponibles
          </Text>
          <Calendar onDayPress={onDayPress} markedDates={marked} />
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
          {/* <HStack>
            <Text fontWeight={"bold"}>{formatCurrency(1000, "MXN")}</Text>
            <Text fontWeight={"thin"}> consulta</Text>
          </HStack> */}
          <Button
            onPress={() => navigation.navigate("BookAppointment", { business })}
            variant="solid"
            colorScheme={"primary"}
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
