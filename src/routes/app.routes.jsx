import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { Menu } from "../Pages/Menu";
import { Favorites } from "../Pages/Favorites";
import { Bought } from "../Pages/Bought";
import { ShopList } from "../Pages/ShopList";
import { Payment } from "../Pages/Payment";
import { PaymentFinish } from "../Pages/PaymentFinish";

import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/Bought" element={<Bought />} />
      <Route path="/ShopList" element={<ShopList />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/PaymentFinish" element={<PaymentFinish />} />
      <Route path="/Details/:id" element={<Details />} />

      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}
