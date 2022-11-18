import React from "react";

import { Box, Badge, Image, Text, HStack } from "@chakra-ui/react";
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import Cartbutton from "./Cartbutton";
const ProductCard = ({ data }) => {
  return (
    <div>
      {" "}
      <Box
        width="90%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        // border="2px solid red"
        h="400px"
        shadow="0 2px 5px rgb(0 0 0 / 10%)"
      >
        <Image src={data.images[0]} h="200px" m="auto" />

        <Box p="4">
          <Box
            // fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            textAlign="center"
          >
            <Text fontSize="xs">{data.name}</Text>
          </Box>
          <Box textAlign="center" p="2">
            10 shades
          </Box>
          <Box textAlign="center">
            <Text fontSize="lg" as="b">
              {data.price}
            </Text>
          </Box>
        </Box>

        <Box textAlign="center">
          <Text fontSize="md">{data.rating}</Text>
        </Box>

        <Box>
          <HStack spacing="60px">
            <HamburgerIcon />
            <Cartbutton />
          </HStack>
        </Box>
      </Box>
    </div>
  );
};

export default ProductCard;
