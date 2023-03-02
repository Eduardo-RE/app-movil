import React from "react";
import { Heading, Icon, Input, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SearchBar = () => {
  const width = Dimensions.get("window").width;
  const insets = useSafeAreaInsets();
  return (
    <VStack
      width={width - 20}
      space={5}
      alignSelf="center"
      marginTop={insets.top - 10}
    >
      <Input
        placeholder="Que estas buscando?"
        m={2}
        borderRadius="50"
        py="2"
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
