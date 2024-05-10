'use client'
import { useState } from "react";
import FormLogin from '@/client-components/FormLogin';
import FormAuth from '@/client-components/FormAuth';
import Image from "next/image";

export default function Home() {
	const [formSeleccionado, setFormSeleccionado] = useState(false)

	const cambiarEstadoForm = () => {
		console.log(formSeleccionado);
		setFormSeleccionado(!formSeleccionado)
	}
	return (
		<div className="central-div-page">
			<div className="imagen-central">
				<Image className="logo-image-to-home" src="/logo.png" alt="" width={230} height={100} />
			</div>
			{formSeleccionado ? <FormAuth select={cambiarEstadoForm} /> : <FormLogin select={cambiarEstadoForm} invitado={true} />}
		</div>
	);
}
