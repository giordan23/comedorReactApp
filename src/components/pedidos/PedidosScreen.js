import React from "react";
import { useForm } from "../../hooks/useForm";

export const PedidosScreen = () => {
	const [formValues, handleInputChange, reset] = useForm({
		registrarPedido: "",
	});

	const { registrarPedido } = formValues;

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(registrarPedido);
    
    reset()
	};

	return (
		<>
			<h1>PedidosScreen</h1>
			<div>
				<form onSubmit={handleSearch}>
					<input
						type={"text"}
						name={"registrarPedido"}
						value={registrarPedido}
						onChange={handleInputChange}
						autoComplete={"off"}
					></input>
				</form>
			</div>
		</>
	);
};
