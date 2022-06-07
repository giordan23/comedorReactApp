import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PedidosScreen } from "../components/pedidos/PedidosScreen";
import { ReportesScreen } from "../components/reportes/ReportesScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pedidos" element={<PedidosScreen />}></Route>
        <Route path="/reportes" element={<ReportesScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
