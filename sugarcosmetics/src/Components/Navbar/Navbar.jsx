import {
  Box,
  HStack,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Spacer,
  Text,
  Container,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import logo from "./logo.png";
export const Navbar = () => {
  return (
    <Box w="100%">
      <Container maxW="100%" mx="auto" px={4} bg="black">
        <Text color="white" align="center">
          Get Rs.300 OFF on minimum spend of Rs.999
        </Text>
        <Divider />
        <HStack spacing={4} justify="space-between">
          <Image src={logo} w={100} />

          <Input
            placeholder="lipstick liquid"
            maxW="39rem"
            borderRadius="5px"
            borderColor="white"
            display={{ base: "none", md: "block" }}
          />

          <HStack spacing={10}>
            <Text color="white">Login/Register</Text>

            <HStack>
              <Text color="white">ic</Text>
              <Text color="white">ic</Text>
              <Text color="white">ic</Text>
            </HStack>
          </HStack>
        </HStack>
      </Container>
      <HStack bg="black" spacing={10} pb={3} display={{ base: "none"}} >
        <Text color="white">MAKEUP</Text>
        <Text color="white">BRUSHES</Text>
        <Text color="white">SKINCARE</Text>
        <Text color="white">GIFTING</Text>
        <Text color="white">BLOG</Text>
        <Text color="white">OFFERS</Text>
        <Text color="white">STORES</Text>
      </HStack>
    </Box>
  );
};


