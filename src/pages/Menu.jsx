import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "../components/Page";
import { Box } from "grommet";
import Product from "../components/Product";

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios.get("products");

    setProducts(response.data);
  }, []);

  return (
    <Page>
      <Box>
        {products.map((product, i) => (
          <Product
            key={i}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            id={product._id}
          />
        ))}
      </Box>
    </Page>
  );
};

export default Menu;
