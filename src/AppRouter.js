import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/carrito" element={<Cart />} />
    </Routes>
  );
};

export default AppRouter;
