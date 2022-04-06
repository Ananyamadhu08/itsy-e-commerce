import React from "react";
import { Cart, Home, Login, Products, Signup, Wishlist } from "../pages";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

function WebsiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
}

export default WebsiteRoutes;
