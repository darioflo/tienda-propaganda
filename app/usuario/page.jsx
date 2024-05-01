'use client'
import FormLogin from '@/client-components/FormLogin';
import { useContext, useState } from 'react';
import { context } from '@/conetxt/HeaderContext';
import FormAuth from '@/client-components/FormAuth';

export default function User() {

    const [formSeleccionado, setFormSeleccionado] = useState(false)

    const cambiarEstadoForm = () => {
        console.log(formSeleccionado);
        setFormSeleccionado(!formSeleccionado)
    }

    return (
        <>
            {formSeleccionado ? <FormAuth select={cambiarEstadoForm} /> : <FormLogin select={cambiarEstadoForm} />}
        </>
    )
}

