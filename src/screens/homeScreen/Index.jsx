import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, FlatList, Heading, Text } from "native-base";
import HeroBanner from "../../components/HeroBanner";
import SearchBar from "../../components/SearchBar";
import CategoryCard from "../../components/CategoryCard";
import categorys from "../../data/categorys";
import doctors from "../../data/doctors";

const HomeScreen = () => {
  return (
    <Box safeArea>
      <HeroBanner />

      {/* <FlatList data={doctors} ListHeaderComponent={<HeroBanner/>} */}
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
