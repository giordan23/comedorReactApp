import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PedidosScreen } from "../components/pedidos/PedidosScreen";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/pedidos" element={<PedidosScreen />}>
					
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
