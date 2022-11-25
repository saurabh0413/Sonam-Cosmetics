import styled from "styled-components";
import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProdContext } from "../context/productContext";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
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
      <Box w="50%" border="2px solid red" ml="40">
        <Text fontSize="2xl">{new_product.name}</Text>
        <Text mt="10">{new_product.price}</Text>
        <Text as="b">Available Offers</Text>
        <UnorderedList spacing={10}>
          <ListItem>
            Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson
            (Crimson Red) And A Flat Glitter Gold Pouch Free On A Minimum Spend
            Of Rs. 799 Know More
          </ListItem>
          <ListItem>
            Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.4999
            Know More
          </ListItem>
        </UnorderedList>
      </Box>
    </div>
  );
};

export default Singleproduct;
