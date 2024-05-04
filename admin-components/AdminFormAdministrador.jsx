import '@/admin-components/admin-components-styles/AdminFormAdministrador.css'
import { useContext, useState, useEffect } from 'react';
import { ENDPIONTS, estadoInicialAdministrador } from '@/constants/constants';
import { adminContext } from '@/conetxt/AdminContext';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import axios from 'axios';
import AccionCompleta from './AccionCompleta';
import Loader from './Loader';


const AdminFormAdministrador = ({ editar }) => {
    const [formulario, setFormulario] = useState(estadoInicialAdministrador);
    const { setEditarAdmines, setContadorEnvios, contadorEnvios } = useContext(adminContext)
    const { setAccionCompletada, accionCompletada, respuesta, setRespuesta, wasError, setWasError } = useContext(asyncContext)
    const [showLoader, setShowLoader] = useState(false)
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
        setShowLoader(true)
        e.preventDefault();
        console.log(formulario);

        if (editar) {
            console.log(editar);
            try {
                const response = await axios.patch(`${ENDPIONTS.editar_administradores}/${editar.id}`, formulario);
                console.log(response.data);

                setRespuesta(response.data)
                setWasError(false)
                setFormulario(estadoInicialAdministrador);
                setAccionCompletada(true)
                setShowLoader(false)
                setContadorEnvios(contadorEnvios + 1)
                setEditarAdmines(false)
            } catch (error) {
                console.error(error);
                if (error.response && error.response.status >= 400) {
                    setAccionCompletada(true)
                    setShowLoader(false)
                    setRespuesta(error.response.data)
                    setWasError(true)
                }
            }
        }
    };

    return (
        <>
            {accionCompletada && <AccionCompleta respuesta={respuesta} error={wasError} />}
            <form onSubmit={manejarEnvio} className='form-admin animate__animated animate__bounceInDown'>
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
                <div className="loader-form" style={{ display: showLoader ? "flex" : "none" }}>
                    {showLoader && <Loader />}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default AdminFormAdministrador;