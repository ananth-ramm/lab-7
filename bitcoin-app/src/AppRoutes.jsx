import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import BitcoinPage from "./pages/BitcoinPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bitcoin" element={<BitcoinPage />} />
    </Routes>
  );
}

export default AppRoutes;
