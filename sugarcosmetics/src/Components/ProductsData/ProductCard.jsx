import React from 'react'

import { Box, Badge, Image, Text, HStack } from "@chakra-ui/react";
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import Cartbutton from './Cartbutton';
const ProductCard = () => {
    const property = {
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Ace of Face Foundation stick",
        formattedPrice: "₹999",
        reviewCount: 34,
        rating: "4.0 (234)",
      };
  return (
    <div>
          {" "}
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        border="2px solid red"
        h="430px"
      >
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          h="222px"
          m="auto"
        />

        <Box p="4">
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            textAlign="center"
          >
            {property.title}
          </Box>
          <Box textAlign="center" p="2">
            10 shades
          </Box>
          <Box textAlign="center">
            <Text fontSize="xl" as="b">
              {property.formattedPrice}
            </Text>
          </Box>
        </Box>

        <Box textAlign="center">
          <Text fontSize="md">{property.rating}</Text>
        </Box>

        <Box>
          <HStack spacing="100px">
            <HamburgerIcon />
            <Cartbutton />
          </HStack>
        </Box>
      </Box>
    </div>
  )
}

export default ProductCard