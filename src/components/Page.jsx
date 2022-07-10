import { Box, Grommet } from "grommet";
import { Main } from "grommet";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ children }) => {
  return (
    <Box pad="xsmall" direction="column" align="center">
      <Navbar></Navbar>
      <Main pad="large"> {children}</Main>
      <Footer></Footer>
    </Box>
  );
};

export default Page;
