import React from "react";
import { Box, Pressable, Text } from "native-base";

const CategoryCard = ({ name }) => {
  console.log(name);

  return (
    <Box alignItems="center" paddingX={3}>
      <Pressable maxW="96" minW={"30"}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
                borderBottomWidth: 1,
                borderColor: "gray.200",
              }}
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
