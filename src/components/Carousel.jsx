import React from "react";
import { Attraction, Car, TreeOption } from "grommet-icons";

import { Box, Carousel } from "grommet";

export const Autoplay = () => (
  <Box align="center">
    <Carousel controls={false} play={3000} width="large">
      <Box pad="xlarge" background="pink">
        <Attraction color="light-2" size="xlarge" />
      </Box>
      <Box pad="xlarge" background="purple">
        <TreeOption color="light-2" size="xlarge" />
      </Box>
      <Box pad="xlarge" background="teal">
        <Car color="light-2" size="xlarge" />
      </Box>
    </Carousel>
  </Box>
);

export default Autoplay;
