import '@/admin-components/admin-components-styles/Tabla.css'
import { adminContext } from '@/conetxt/AdminContext';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import { useContext, useEffect, useState } from 'react';
import { ENDPIONTS } from '@/constants/constants';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios';
import AdminFormTiendas from './AdminFormTiendas';
import AdminFormAdministrador from './AdminFormAdministrador';
import BorrarModal from './BorrarModal';
import AccionCompleta from './AccionCompleta';

export default function Tabla({ thead }) {

    const [datos, setDatos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { setMostrarTiendas, verAdministradores, setVerAdministradores, contadorEnvios, editarTiendas, setEditarTiendas, editarAdmines, setEditarAdmines } = useContext(adminContext)
    const { borrar, setBorrar, accionCompletada, setAccionCompletada, respuesta, setRespuesta, wasError } = useContext(asyncContext);
    const mostrarFormSegun = thead.hasOwnProperty("Provincia");
    const [datoEliminar, setDatoEliminar] = useState('')
    const [editables, setEditables] = useState({})



    const mostrarFormulario = async (id) => {
        if (mostrarFormSegun) {
            setEditarTiendas(true)
            setMostrarTiendas(true)
            console.log(id, "entro a tienda");

            try {
                const response = await axios.get(`https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/shopsname/${id}`)
                console.log(response.data)
                setEditables(response.data)
                setRespuesta(response.data)
            } catch (error) {
                console.log(error);
            }
        } else {
            setEditarAdmines(true)
            setVerAdministradores(true)
            console.log(id, editarAdmines, "entro aki", verAdministradores);

            try {
                const response = await axios.get(`https://0m9fgs4l-5000.usw3.devtunnels.ms/user/user/${id}`)
                console.log(response.data)
                setEditables(response.data)
                setRespuesta(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const elegirTabla = () => {
        let url
        if (mostrarFormSegun) {
            url = ENDPIONTS.tiendas
        }
        else {
            url = ENDPIONTS.administradores
        }
        console.log(url);
        return url
    }

    const traerDatos = async (url) => {
        try {
            let res = await fetch(url)
            let json = await res.json()

            console.log(json);
            setDatos(json)
            setCargando(false)
        } catch (error) {
            console.log(error);
        }
    }

    const borrarDeTabla = (dato) => {
        setDatoEliminar(dato)
        setBorrar(true)
    }



    useEffect(() => {
        let ruta = elegirTabla(thead);
        traerDatos(ruta)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contadorEnvios])

    useEffect(() => {
        if (accionCompletada) {
            const timer = setTimeout(() => {
                setAccionCompletada(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accionCompletada]);

    const Esqueleto = () => {
        return (
            <table className="tabla">
                <thead>
                    <tr>
                        <th><Skeleton /></th>
                        <th><Skeleton /></th>
                        <th><Skeleton /></th>
                        <th><Skeleton /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                </tbody>
            </table>
        )
    }

    if (cargando) {
        return <Esqueleto />
    }
    else {
        return (
            <>
                {accionCompletada && <AccionCompleta respuesta={respuesta} error={wasError} />}
                {borrar && <BorrarModal borrarDato={datoEliminar} />}
                <section className='seccion-tabla'>
                    {editarTiendas && <AdminFormTiendas editar={editables} />}
                    {editarAdmines && <AdminFormAdministrador editar={editables} />}
                    <div style={{ width: '100%', textAlign: "center", padding: '.3rem', fontWeight: 'bold' }}>{thead.hasOwnProperty("Provincia") ? "Tiendas:" : "Administradores:"}</div>
                    <table className="tabla animate__animated animate__bounceInUp">
                        <thead>
                            <tr>
                                {datos.length > 0 && Object.keys(datos[0]).map((key, index) =>
                                    key !== 'id' ? <th key={index}>{key}</th> : null
                                )}
                                <th className='opciones'>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.length > 0 && datos.map((dato, index) => (
                                <tr key={index}>
                                    {Object.entries(dato).map(([atributo, valor], index) =>
                                        atributo !== 'id' ? <td key={index}>{valor}</td> : null
                                    )}
                                    <td className='opciones'>
                                        <button className="boton-ver"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" /></svg></button>
                                        <button className="boton-editar" onClick={() => mostrarFormulario(dato.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z" /></svg></button>
                                        {mostrarFormSegun ? <button className="boton-eliminar" onClick={() => borrarDeTabla(dato.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg></button> : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </>
        )
    }
}
