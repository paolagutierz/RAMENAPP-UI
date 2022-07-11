import { Box, Grommet } from "grommet";
import { Main } from "grommet";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ children }) => {
  return (
    <Box height={{ min: "100vh" }} direction="column" align="center">
      <Navbar></Navbar>
      <Main pad="large" flex={{ grow: "1" }}>
        {children}
      </Main>
      <Footer></Footer>
    </Box>
  );
};

export default Page;
