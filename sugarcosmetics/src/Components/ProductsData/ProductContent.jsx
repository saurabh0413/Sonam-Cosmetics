import React from "react";
import ProductCard from "./ProductCard";
import { Grid, GridItem } from "@chakra-ui/react";
const ProductContent = () => {
  return (
    <div style={{ border: "2px solid black", width: "70%" }}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%">
            <ProductCard />
        </GridItem>
        <GridItem w="100%">
            <ProductCard />
        </GridItem>
        <GridItem w="100%">
            <ProductCard />
        </GridItem>
        <GridItem w="100%">
            <ProductCard />
        </GridItem>
        <GridItem w="100%">
            <ProductCard />
        </GridItem>
        <GridItem w="100%">
            <ProductCard />
        </GridItem>
        
      </Grid>
    </div>
  );
};

export default ProductContent;
