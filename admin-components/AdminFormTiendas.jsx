'use client'
import '@/admin-components/admin-components-styles/AdminFormTiendas.css'
import { useState } from 'react';
import { estadoInicialTiendas, Provincias } from '@/constants/constants';

const AdminFormTiendas = () => {
    const [formulario, setFormulario] = useState(estadoInicialTiendas);
    const [provincia, setProvincia] = useState("")

    const manejarCambioProvincia = (e) => {
        setProvincia(e.target.value);
        setFormulario({
            ...formulario,
            provincia: e.target.value
        });
    }

    const manejarCambio = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });

    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(formulario);

        setFormulario(estadoInicialTiendas);
        setProvincia("")

    };

    return (
        <form onSubmit={manejarEnvio} className='form-tiendas'>
            <h3>Agregar una Tienda:</h3>
            <input type="text" name="nombre" placeholder="Nombre de la tienda" value={formulario.nombre} onChange={manejarCambio} />
            <input type="text" name="administrador" placeholder="Administrador" value={formulario.administrador} onChange={manejarCambio} />
            <input type="text" name="usuario" placeholder="Usuario" value={formulario.usuario} onChange={manejarCambio} />
            <input type="password" name="contrasena" placeholder="Contraseña" value={formulario.contrasena} onChange={manejarCambio} />
            <select name="provincia" placeholder="Provincia" value={provincia} onChange={manejarCambioProvincia}>
                <option value='' disabled>Escoja una provincia</option>
                {Provincias.map(provincia => <option key={provincia.id}>{provincia.nombre}</option>)}
            </select>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormTiendas;