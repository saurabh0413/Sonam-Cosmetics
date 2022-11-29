import React from "react";
import Filter from "./Filter";
import ProductContent from "./ProductContent";
import { Flex, Stack, Wrap } from "@chakra-ui/react";
import styles from "./Products.module.css";
const Products = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "150px" }}>
        <img
          src="https://imgs.search.brave.com/LcVUbpfe1IagdSCXE8XJx33HLB6ztIBN2rnDhwycpRs/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/X3lfU09BTmtiMWhv/M1dLNkxIYnFnSGFF/SyZwaWQ9QXBp"
          alt=""
          className={styles.img1}
        />
      </div>

      <Stack
        justify="space-between"
        maxW="1400px"
        margin="auto"
        direction={{ base: "column",md:"row" }} //
      >
        <Filter />
        <ProductContent />
      </Stack>
    </div>
  );
};

export default Products;
