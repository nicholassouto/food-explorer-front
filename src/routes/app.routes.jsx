import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { Menu } from "../Pages/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Details/:id" element={<Details />} />
    </Routes>
  );
}
