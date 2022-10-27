import React from "react";
import { Box, FlatList, Heading, Text } from "native-base";
import SearchBar from "./SearchBar";
import categorys from "../data/categorys";
import CategoryCard from "./CategoryCard";
import { Dimensions } from "react-native";
const HeroBanner = () => {
  const width = Dimensions.get("window").width;

  return (
    <Box bg="white" shadow={2}>
      <SearchBar />
      <FlatList
        data={categorys}
        renderItem={({ item }) => <CategoryCard name={item.name} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
};

export default HeroBanner;
