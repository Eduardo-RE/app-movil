import React from "react";
import { Box, FlatList } from "native-base";
import SearchBar from "./SearchBar";
import categorys from "../data/categorys";
import CategoryCard from "./CategoryCard";

const HeroBanner = () => {
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
