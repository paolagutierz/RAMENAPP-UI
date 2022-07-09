import { Box, Grommet } from "grommet";
import { grommet as light } from "grommet/themes";
import { Header, Main } from "grommet";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ children }) => {
  return (
    <Box flex={true} pad="xsmall" direction="column" align="center">
      <Navbar></Navbar>
      <Main pad="small"> {children}</Main>
      <Footer></Footer>
    </Box>
  );
};

export default Page;
