import React from "react";
import { Tab, Tabs, Box } from "grommet";
import { HomeRounded, Cart, Cafeteria } from "grommet-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const goTo = (url) => {
    navigate(url);
  };

  return (
    <Box>
      <Tabs>
        <Tab
          title="Inicio"
          icon={<HomeRounded />}
          onClick={() => goTo("/")}></Tab>
        <Tab
          title="Menu"
          icon={<Cafeteria />}
          onClick={() => goTo("/menu")}></Tab>
        <Tab
          title="Carro"
          icon={<Cart />}
          onClick={() => goTo("/carrito")}></Tab>
      </Tabs>
    </Box>
  );
};

export default Navbar;
