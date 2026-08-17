import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Product from "./Product";
import Profile from "./Profile";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>}>
          <Route path="/product/:id" element=""/>
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
