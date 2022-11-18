import React from "react";
import ProductCard from "./ProductCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import { ProdContext } from "../../context/productContext";
import { useEffect } from "react";
import axios from "axios";
import {
  productFailure,
  productSuccess,
  productRequest,
} from "../../reducers/action";
const ProductContent = () => {
  const { state, dispatch } = useContext(ProdContext);

  const getData = async () => {
    dispatch(productRequest());
    await axios
      .get("http://localhost:8080/products")
      .then((res) => {
        dispatch(productSuccess(res.data));
      })
      .catch(() => {
        dispatch(productFailure());
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{width:"70%"}}>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {state.products.map((item) => {
          return <ProductCard data={item} />;
        })}
      </Grid>
    </div>
  );
};

export default ProductContent;
