import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_ROUTE } from "./Routes";
import Home from "../pages/Home";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
