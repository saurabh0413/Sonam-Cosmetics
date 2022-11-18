import React from "react";
import Filter from "./Filter";
import ProductContent from "./ProductContent";
import { Flex, Spacer } from '@chakra-ui/react'
const Products = () => {
  return (
    <Flex>
      <Filter />
      <Spacer />
      <ProductContent />
    </Flex>
  );
};

export default Products;
