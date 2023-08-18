import { Routes, Route } from "react-router-dom";

import { HomeADM } from "../Pages/HomeADM";
import { DetailsADM } from "../Pages/DetailsADM";
import { MenuADM } from "../Pages/MenuADM";
import { SignUpADM } from "../Pages/SignUpADM";
import { EditPlateADM } from "../Pages/EditPlateADM";
import { CreatePlateADM } from "../Pages/CreatePlateADM";
// import { Payment } from "../Pages/Payment";
// import { PaymentFinish } from "../Pages/PaymentFinish";

export function AppADMRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeADM />} />
      <Route path="/Menu" element={<MenuADM />} />
      <Route path="/SignUpADM" element={<SignUpADM />} />
      <Route path="/DetailsADM/:id" element={<DetailsADM />} />
      <Route path="/EditPlateADM/:id" element={<EditPlateADM />} />
      <Route path="/CreatePlateADM" element={<CreatePlateADM />} />
      {/* <Route path="/Favorites" element={<Favorites />} />
      <Route path="/PaymentFinish" element={<PaymentFinish />} /> */}
    </Routes>
  );
}
