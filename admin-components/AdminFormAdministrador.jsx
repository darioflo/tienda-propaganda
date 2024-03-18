import '@/admin-components/admin-components-styles/AdminFormAdministrador.css'
import { useContext, useState, useEffect } from 'react';
import { estadoInicialAdministrador } from '@/constants/constants';
import { adminContext } from '@/conetxt/AdminContext';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import axios from 'axios';
import AccionCompleta from './AccionCompleta';


const AdminFormAdministrador = ({ editar }) => {
    const [formulario, setFormulario] = useState(estadoInicialAdministrador);
    const { setEditarAdmines, setContadorEnvios, contadorEnvios } = useContext(adminContext)
    const { setAccionCompletada, accionCompletada, respuesta, setRespuesta, wasError, setWasError } = useContext(asyncContext)

    useEffect(() => {
        if (editar) {
            setFormulario(editar);
        } else {
            setFormulario(estadoInicialAdministrador);
        }
    }, [editar]);

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
            console.log(editar);
            try {
                const response = await axios.patch(`http://172.20.10.3:5000/user/updateuser/${editar.id}`, formulario);
                console.log(response.data);

                setRespuesta(response.data)
                setWasError(false)
                setFormulario(estadoInicialAdministrador);
                setAccionCompletada(true)
                setContadorEnvios(contadorEnvios + 1)
                setEditarAdmines(false)
            } catch (error) {
                console.error(error);
                if (error.response && error.response === 400) {
                    setAccionCompletada(true)
                    setRespuesta(error.response.data)
                    setWasError(true)
                }
            }
        }
    };

    return (
        <>
            <form onSubmit={manejarEnvio} className='form-admin'>
                <div className="encabezado">
                    <h3>{editar ? 'Editar administrador' : 'Agregar Administrador:'}</h3>
                </div>
                <div className="info">
                    <div className="datos">
                        <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={manejarCambio} required />
                        <input name="tienda" placeholder="Tienda a gestionar" value={editar.tienda} onChange={manejarCambio} required />
                        <input type="text" name="usuario" placeholder="Usuario" value={formulario.usuario} onChange={manejarCambio} required />
                        <input type="password" name="contrasena" placeholder="Contraseña" value={formulario.contrasena} onChange={manejarCambio} required />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default AdminFormAdministrador;