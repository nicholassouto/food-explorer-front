import { Routes, Route } from "react-router-dom";

import { HomeADM } from "../Pages/HomeADM";
import { DetailsADM } from "../Pages/DetailsADM";
import { MenuADM } from "../Pages/MenuADM";
import { SignUpADM } from "../Pages/SignUpADM";
import { EditPlateADM } from "../Pages/EditPlateADM";
import { CreatePlateADM } from "../Pages/CreatePlateADM";
import { BoughtADM } from "../Pages/BoughtADM";

export function AppADMRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeADM />} />
      <Route path="/Menu" element={<MenuADM />} />
      <Route path="/SignUpADM" element={<SignUpADM />} />
      <Route path="/DetailsADM/:id" element={<DetailsADM />} />
      <Route path="/EditPlateADM/:id" element={<EditPlateADM />} />
      <Route path="/CreatePlateADM" element={<CreatePlateADM />} />
      <Route path="/BoughtADM" element={<BoughtADM />} />
    </Routes>
  );
}
