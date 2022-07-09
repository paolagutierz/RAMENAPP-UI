import React from "react";
import { grommet as light } from "grommet/themes";
import { Anchor, Box, Header, Menu, ResponsiveContext, Grommet } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import {
  MdRamenDining as WabiIcon,
  MdMenuBook as MenuRamen,
  MdOutlineShoppingCart as ShoppingCart,
} from "react-icons/md";

export const NavBar = () => (
  <Grommet theme={light} full>
    <Header background="light-3" pad="medium" height="xsmall">
      <Anchor
        gap="3"
        href="/"
        icon={<WabiIcon color="brand" size="40" />}
        label="Wabi-Sabi"
      />
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: "center" }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Menu</Box>,
                    href: "/menu",
                  },
                  {
                    label: <Box pad="small">Carrito</Box>,
                    href: "/carrito",
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor
                gap="5"
                href="/menu"
                label="Menu"
                icon={<MenuRamen color="brand" />}
              />
              <Anchor
                gap="2"
                href="/carrito"
                label="Carrito"
                icon={<ShoppingCart color="brand" />}
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);

export default NavBar;
