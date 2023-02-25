import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Offers from "../Pages/Offers";
import SingleOffer from "../Pages/SingleOffer";
import Home from "../Pages/Home";
import Logout from "../Pages/Logout";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/offer" element={<Offers />}></Route>
        <Route path="/offer/:id" element={<SingleOffer />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
