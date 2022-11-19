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
import AccordCompo from "./AccordCompo";
const Filter = () => {
  const data = [
    {
      productType: [
        "Product Type",
        "primers",
        "powder",
        "Translucent Powder",
        "compact",
        "Foundations & Concealers",
        "Face Foundation",
        "BB Cream",
        "stick",
        "palette",
        "Pressed Powder",
        "value sets",
        "",
      ],
    },
    {
      productType: [
        "Feature",
        "primer",
        "Translucent Powder",
        "Face Foundation",
        "stick",
        "",
      ],
    },
    {
      productType: [
        "Formulation",
        "cream",
        "Loose Powder",
        "Pressed Powder",
        "stick",
        "Liquid",
      ],
    },
    {
      productType: [
        "Concern",
        "Brightening",
        "oil control",
        "under eye",
        "Blurring",
      ],
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreparams = searchParams.getAll("type");

  const [category, setCategory] = useState(initialGenreparams || []);

  const handleChange = (e) => {
    const checkedData = e.target.value;
    const new_category = [...category];

    if (category.includes(checkedData)) {
      new_category.splice(new_category.indexOf(checkedData), 1);
    } else {
      new_category.push(checkedData);
    }
    setCategory(new_category);
  };
  useEffect(() => {
    console.log("filter");
    if (category) {
      const params = {};
      category && (params.type = category);
      setSearchParams(params);
    }
  }, [category, setSearchParams]);
  return (
    <div style={{ border: "2px solid red", width: "25%" }}>
      <Box w={300} ml={10} mb={10}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Sort By: Relevance
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
                  <Checkbox value="Relevance">Relevance</Checkbox>
                  <Checkbox value="High">Price: High to Low</Checkbox>
                  <Checkbox value="Low">Price: Low to High</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box w={300} ml={10}>
        <Accordion allowToggle>
          {data.map((item) => {
            return <AccordCompo item={item} handleChange={handleChange} category={category} />;
          })}
        </Accordion>
      </Box>
    </div>
  );
};

export default Filter;
