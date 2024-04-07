'use client'
import '@/admin-components/admin-components-styles/AdminFormTiendas.css'
import { useEffect, useState } from 'react';
import { estadoInicialTiendas, Provincias } from '@/constants/constants';
import axios from 'axios';
import { ENDPIONTS } from '@/constants/constants';
import { useContext } from 'react';
import { adminContext } from '@/conetxt/AdminContext';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import AccionCompleta from './AccionCompleta';

const AdminFormTiendas = ({ editar }) => {

    const { setContadorEnvios, contadorEnvios, setEditarTiendas } = useContext(adminContext)
    const { setAccionCompletada, accionCompletada, respuesta, setRespuesta, wasError, setWasError } = useContext(asyncContext)
    const [formulario, setFormulario] = useState(estadoInicialTiendas);
    const [provincia, setProvincia] = useState("")

    useEffect(() => {
        if (editar) {
            setFormulario(editar);
        } else {
            setFormulario(estadoInicialTiendas);
        }
    }, [editar]);

    useEffect(() => {
        if (accionCompletada) {
            const timer = setTimeout(() => {
                setAccionCompletada(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accionCompletada]);

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
        if (editar) {
            try {
                const response = await axios.patch(`${ENDPIONTS.editar_tienda}/${editar.id}/${editar.usuario}`, formulario);
                console.log(response.data);
                setAccionCompletada(true)
                setRespuesta(response.data)
                setWasError(false)


            } catch (error) {
                console.log(error, error.response.status);
                if (error.response && error.response.status === 400) {
                    setAccionCompletada(true)
                    setRespuesta(error.response.data)
                    setWasError(true)
                }
            }
            setFormulario(estadoInicialTiendas);
            setProvincia("")
            setContadorEnvios(contadorEnvios + 1)
            setEditarTiendas(false)
        }
        else {
            try {
                const response = await axios.post(ENDPIONTS.agregar_tienda, formulario);
                setAccionCompletada(true)
                setRespuesta(response.data)
                console.log(response.data);
                setWasError(false)

            } catch (error) {
                console.log(error, error.response.status);
                setAccionCompletada(true)
                setRespuesta(error.response.data)
                setWasError(true)
            }
            setFormulario(estadoInicialTiendas);
            setProvincia("")
            setContadorEnvios(contadorEnvios + 1)
        }

    };

    return (
        <>
            {accionCompletada && <AccionCompleta respuesta={respuesta} error={wasError} />}
            <form onSubmit={manejarEnvio} className='form-tiendas animate__animated animate__bounceInDown'>
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
        </>
    );
};

export default AdminFormTiendas;