import React from "react";
import { MdRamenDining as WabiIcon } from "react-icons/md";
import { Anchor, Box, Footer, Text } from "grommet";

const FooterAnchor = ({ ...rest }) => (
  <Anchor href="/" size="small" color="brand" {...rest} />
);

const data = [["Inicio", "Menu", "Carro"]];

const FooterContent = () =>
  data.map((item) => (
    <Box direction="row" gap="large" justify="center" display="flex">
      {[0, 1, 2].map((i) => (
        <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
      ))}
    </Box>
  ));

const PageFooter = () => (
  <Footer position="fixed" bottom="0" background="light-5" pad="medium">
    <Box align="center" gap="small">
      <WabiIcon color="brand" size="50px" />
      <Text alignSelf="center" color="brand" weight="bold">
        WABI-SABI
      </Text>
    </Box>
    <FooterContent />
  </Footer>
);

export default PageFooter;
