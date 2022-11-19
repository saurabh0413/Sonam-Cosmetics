import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import Test from "./Test";

const AccordCompo = ({ item, handleChange, category }) => {
  // console.log(category,"cat")
  return (
    <div>
      {" "}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAslign="left">
              {item.productType[0]}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <CheckboxGroup colorScheme="green">
            <VStack
              spacing={[1, 5]}
              direction={["column", "row"]}
              align="flex-start"
            >
              {item.productType.map((item) => {
                return (
                  <Test
                    value={item}
                    onChange={handleChange}
                    category={category}
                  />
                );
              })}
            </VStack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default AccordCompo;
