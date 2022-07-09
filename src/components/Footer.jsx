import React from "react";
import { grommet as light } from "grommet/themes";
import {
  MdRamenDining as WabiIcon,
  MdMenuBook as MenuRamen,
  MdOutlineShoppingCart as ShoppingCart,
} from "react-icons/md";

import { Anchor, Box, Footer, Text, Grommet } from "grommet";

const FooterNav = () => (
  <Box direction="row" gap="medium" justify="center">
    <Anchor
      gap="5px"
      label="Menu"
      href="/menu"
      icon={<MenuRamen color="brand" />}
    />
    <Anchor
      gap="2px"
      label="Carrito"
      href="/carrito"
      icon={<ShoppingCart color="brand" />}
    />
  </Box>
);

export const FooterFinish = () => (
  <Grommet theme={light} full>
    <Box>
      <Footer background="light-4" pad="small" height="xsmall">
        <Box align="center" direction="row" gap="medium">
          <Anchor
            gap="3px"
            href="/"
            icon={<WabiIcon color="brand" size="40" />}
            label="Wabi-Sabi"
          />
        </Box>
        <FooterNav />
        <Text textAlign="center" size="xsmall">
          ©Copyright
        </Text>
      </Footer>
    </Box>{" "}
  </Grommet>
);

export default FooterFinish;
