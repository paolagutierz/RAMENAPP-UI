import React from "react";
import { Attraction, Car } from "grommet-icons";
import { Anchor, Box, Button, Text } from "grommet";

const SimpleBox = () => (
  <Box
    direction="row-responsive"
    justify="center"
    align="center"
    pad="medium"
    background="dark-2"
    gap="medium">
    <Box
      pad="medium"
      align="center"
      background={{ color: "light-2", opacity: "strong" }}
      round
      gap="small">
      <Attraction size="large" />
      <Text>Party</Text>
      <Anchor href="" label="Link" />
      <Button label="Button" onClick={() => {}} />
    </Box>
    <Box pad="medium" align="center" background="dark-3" round gap="small">
      <Car size="large" color="light-2" />
      <Text>Travel</Text>
      <Anchor href="" label="Link" />
      <Button label="Button" onClick={() => {}} />
    </Box>
  </Box>
);

export default SimpleBox;
