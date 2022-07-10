import React from "react";
import Page from "../components/Page";
import { Box } from "grommet";
import ProductCard from "../components/ProductCard";

const Menu = (props) => {
  return (
    <Page>
      <Box>
        <ProductCard></ProductCard>
      </Box>
    </Page>
  );
};

export default Menu;
