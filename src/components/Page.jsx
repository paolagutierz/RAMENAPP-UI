import { Box } from "grommet";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <Box
        border={{ color: "brand", size: "large" }}
        pad="150px"
        direction="column">
        {props.children}
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Page;
