import { Box,Grommet } from "grommet";
import { grommet as light } from 'grommet/themes'
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = (props) => {
  return (
    <Grommet theme={light} full>
    <Box align='center' flex={true} justify="center" pad='small' direction='column'>
    <Navbar/>
      <Box
        border={{ color: "brand", size: "large" }}>
        {props.children}
      </Box>
      <Footer></Footer>
      </Box>
      </Grommet>

  
  );
};

export default Page;
