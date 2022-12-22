import styled from "styled-components";
import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProdContext } from "../context/productContext";
import {
  Box,
  Divider,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import Cartbutton from "../Components/ProductsData/Cartbutton";
import Navbar from "../Components/Navbar/Navbar";

const Singleproduct = () => {
  const getproduct = useParams();
  console.log(getproduct.title);
  const { state } = useContext(ProdContext);
  const new_product = state.products.find(
    (item) => item.name == getproduct.title
  );
  console.log(state.products);
  console.log(new_product, "new");

  const [centerimg, SetCenterimg] = useState(new_product.images[0]);
  return (
    <Box>
      <Navbar />

      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="center"
        spacing={50}
        border="2px solid red"
      >
        <HStack spacing={10}>
          <VStack spacing={5}>
            {new_product.images.map((img) => {
              return (
                <Image w="50px" src={img} onClick={() => SetCenterimg(img)} />
              );
            })}
          </VStack>
          <Image src={centerimg} w="300px" minW="80px" />
        </HStack>
        <VStack
          align="revert-layer"
          spacing={{ base: "none", sm: 3, xl: 5 }}
          w={{ base: "100%", sm: "200px", md: "400px", xl: "500px" }}
        >
          <Text>{new_product.name}</Text>
          <Text>{new_product.price}</Text>
          <VStack align="revert-layer" spacing={5}>
            <Text>AVAILABLE OFFERS!!</Text>
            <Text overflow="hidden">
              Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson
              (Crimson Red) On A Minimum Spend Of Rs. 799
            </Text>
            <Text overflow="hidden">
              Grab A Complimentary Product Worth Rs.3000 On A Spend Of Rs.499
            </Text>
          </VStack>
          <Box>
            <HStack spacing="60px">
              <HamburgerIcon />
              <Cartbutton />
            </HStack>
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Singleproduct;
