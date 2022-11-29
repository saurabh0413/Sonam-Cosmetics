import styled from "styled-components";
import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProdContext } from "../context/productContext";
import { Box, HStack, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Cartbutton from "../Components/ProductsData/Cartbutton";
const Singleproduct = () => {
  const getproduct = useParams();
  console.log(getproduct.title);
  const { state } = useContext(ProdContext);
  const new_product = state.products.find(
    (item) => item.name == getproduct.title
  );
  console.log(state.products);
  console.log(new_product, "new");
  return (
    <div>
      <Stack>
        <Box>this is for images</Box>
        <Box w="50%" border="2px solid red" ml="40">
          <Text fontSize="2xl">{new_product.name}</Text>
          <Text mt="10" mb={10}>
            {new_product.price}
          </Text>
          <Text as="b" ml={10}>
            Available Offers
          </Text>
          <UnorderedList spacing={3} ml={20}>
            <ListItem>
              Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson
              (Crimson Red) And A Flat Glitter Gold Pouch Free On A Minimum
              Spend Of Rs. 799
            </ListItem>
            <Text>Know more</Text>
            <ListItem>
              Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.4999
            </ListItem>
            <Text>Know more</Text>
          </UnorderedList>

          <Text color="red" ml={16} mt={6}>
            +view more
          </Text>
          <Box mt={20} ml={20}>
            <HStack spacing="60px">
              <HamburgerIcon />
              <Cartbutton />
            </HStack>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Singleproduct;
