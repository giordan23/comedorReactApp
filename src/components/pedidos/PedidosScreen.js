import React from "react";
import { useForm } from "../../hooks/useForm";

export const PedidosScreen = () => {
	const [values, handleInputChange, reset] = useForm({
		registrarPedidoInput: "",
	});

	const { registrarPedidoInput } = values;

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(registrarPedidoInput);
		if (registrarPedidoInput.trim().length === 8 || registrarPedidoInput.trim().length === 10) {
			//llama a peticion
			postPedido(url,{id_estudiante: registrarPedidoInput, idClient : 1})

			console.log('Pedido enviado ' + registrarPedidoInput);
			reset()
			return true
		} else {
			console.log('no enviado');
		}
		reset()
		return false
	};

	const url = 'http://127.0.0.1:8081/api/pedidos'

	
	const postPedido = async (url, data = {}) => {
		// Opciones por defecto estan marcadas con un *

		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		});

		
		let respData = await response.json();
			console.log(respData);
	}
	// console.log(response);
	return (
		<>
			<h1>PedidosScreen</h1>
			<div>
				<form onSubmit={handleSearch}>
					<input
						type={"text"}
						name={"registrarPedidoInput"}
						value={registrarPedidoInput}
						onChange={handleInputChange}
						autoComplete={"off"}
						autoFocus={true}
					></input>
				</form>
				
			</div>
			<div>
			</div>
		</>
	);
};
