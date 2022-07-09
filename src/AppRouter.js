import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/carrito" element={<Shop />} />
    </Routes>
  );
};

export default AppRouter;
