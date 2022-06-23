import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CHARACTER_ROUTE, HOME_ROUTE, CHARACTERS_ROUTE } from "./Routes";

import Home from "../pages/Home";
import Lobby from "../pages/Lobby";
import Character from "../pages/Character";

import ProtectedRoute from "./ProtectedRoute";
import LobbyRedirect from "./LobbyRedirect";
const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={
            <LobbyRedirect>
              <Home />
            </LobbyRedirect>
          }
        />
        <Route
          path={CHARACTERS_ROUTE}
          element={
            <ProtectedRoute>
              <Lobby />
            </ProtectedRoute>
          }
        />
        <Route path={CHARACTER_ROUTE} element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
