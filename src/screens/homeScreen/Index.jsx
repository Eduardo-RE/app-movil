import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, FlatList } from "native-base";
import HeroBanner from "../../components/HeroBanner";
import doctors from "../../data/doctors";
import DoctorCard from "../../components/DoctorCard";

const HomeScreen = () => {
  //get width of screen

  return (
    <Box bgColor={"white"}>
      <FlatList
        ListHeaderComponent={() => <HeroBanner />}
        data={doctors}
        renderItem={({ item }) => (
          <Center bgColor={"white"}>
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
