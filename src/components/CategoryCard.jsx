import React from "react";
import { Box, Flex, HStack, Pressable, Text, Badge, Spacer } from "native-base";

const CategoryCard = ({ name }) => {
  console.log(name);

  return (
    <Box alignItems="center" ml={2}>
      <Pressable maxW="96" minW={"30"}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? "coolGray.200"
                  : isHovered
                  ? "coolGray.200"
                  : "coolGray.100"
              }
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
              p="5"
              rounded="10"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
            >
              <Text color="coolGray.800" fontWeight="medium" fontSize="md">
                {name}
              </Text>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};

export default CategoryCard;
