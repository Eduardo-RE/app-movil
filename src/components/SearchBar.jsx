import React from "react";
import { Heading, Icon, Input, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <VStack w="100%" space={5} alignSelf="center">
      <Input
        placeholder="Buscar..."
        m={2}
        borderRadius="10"
        py="4"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
        InputRightElement={
          <Icon
            m="2"
            mr="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="mic" />}
          />
        }
      />
    </VStack>
  );
};

export default SearchBar;
