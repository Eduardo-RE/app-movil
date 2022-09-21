import { StyleSheet } from "react-native";
import React from "react";
import { Box, FlatList, Heading, Text } from "native-base";
import { globalStyles } from "../styles/globalStyles";
import SearchBar from "./SearchBar";
import categorys from "../data/categorys";
import CategoryCard from "./CategoryCard";

const HeroBanner = () => {
  return (
    <>
      <Heading m={2}>Doctores</Heading>
      <SearchBar />
      <FlatList
        data={categorys}
        renderItem={({ item }) => <CategoryCard name={item.name} />}
        horizontal
        p={2}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HeroBanner;
