'use client'
import '@/admin-components/admin-components-styles/AdminFormTiendas.css'
import { useEffect, useState } from 'react';
import { estadoInicialTiendas, Provincias } from '@/constants/constants';
import axios from 'axios';
import { ENDPIONTS } from '@/constants/constants';

const AdminFormTiendas = ({ editar }) => {
    const [formulario, setFormulario] = useState(estadoInicialTiendas);
    const [provincia, setProvincia] = useState("")

    useEffect(() => {
        if (editar) {
            setFormulario(editar);
        } else {
            setFormulario(estadoInicialTiendas);
        }
    }, [editar]);

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

    const manejarEnvio = async (e) => {
        e.preventDefault();
        console.log(formulario);
        if (editar) {
            try {
                const response = await axios.patch(`http://172.20.10.3:5000/shop/editshop/${editar.nombre}`);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }

            setFormulario(estadoInicialTiendas);
            setProvincia("")
        }
        else {
            try {
                const response = await axios.post(ENDPIONTS.agregar_tienda, formulario);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }

            setFormulario(estadoInicialTiendas);
            setProvincia("")
        }
        console.log(formulario);

    };

    return (
        <form onSubmit={manejarEnvio} className='form-tiendas'>
            <h3>{editar ? 'Editar Tienda:' : 'Agregar Tienda:'}</h3>
            <input type="text" name="nombre" placeholder="Nombre de la tienda" value={formulario.nombre} onChange={manejarCambio} />
            <input type="text" name="administrador" placeholder="Administrador" value={formulario.administrador} onChange={manejarCambio} />
            <input type="text" name="usuario" placeholder="Usuario" value={formulario.usuario} onChange={manejarCambio} />
            <input type="email" name="correo" placeholder="Correo" value={formulario.correo} onChange={manejarCambio} />
            <input type="password" name="contrasena" placeholder="Contraseña" value={formulario.contrasena} onChange={manejarCambio} />
            <select name="provincia" placeholder="Provincia" value={formulario ? formulario.provincia : provincia} onChange={manejarCambioProvincia}>
                <option value='' disabled>Escoja una provincia</option>
                {Provincias.map(provincia => <option key={provincia.id}>{provincia.nombre}</option>)}
            </select>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormTiendas;