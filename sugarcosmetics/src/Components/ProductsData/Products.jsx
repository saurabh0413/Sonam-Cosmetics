import React from "react";
import Filter from "./Filter";
import ProductContent from "./ProductContent";
import { Flex, Spacer } from "@chakra-ui/react";
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
      <div style={{ width: "100%", marginTop: "1%" }}>
        <Flex justify="space-between">
          <Filter />
          <ProductContent />
        </Flex>
      </div>
    </div>
  );
};

export default Products;
