import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { Box, Center, FlatList, Heading, Text } from "native-base";
import HeroBanner from "../../components/HeroBanner";
import SearchBar from "../../components/SearchBar";
import CategoryCard from "../../components/CategoryCard";
import categorys from "../../data/categorys";
import doctors from "../../data/doctors";
import DoctorCard from "../../components/DoctorCard";

const HomeScreen = () => {
  //get width of screen
  return (
    <Box
      safeArea
      justifyContent={"center"}
      alignItems={"center"}
      bgColor="white"
    >
      <FlatList
        ListHeaderComponent={() => <HeroBanner />}
        data={doctors}
        renderItem={({ item }) => (
          <Center>
            <DoctorCard doctor={item} />
          </Center>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
