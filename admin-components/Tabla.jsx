import '@/admin-components/admin-components-styles/Tabla.css'
import { adminContext } from '@/conetxt/AdminContext';
import { useContext, useEffect, useState } from 'react';
import { ENDPIONTS } from '@/constants/constants';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios';
import AdminFormTiendas from './AdminFormTiendas';
import AdminFormAdministrador from './AdminFormAdministrador';

export default function Tabla({ thead }) {

    const [datos, setDatos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { setMostrarTiendas, setVerAdministradores } = useContext(adminContext)
    const mostrarFormSegun = thead.hasOwnProperty("Provincia");
    const [editarTiendas, setEditarTiendas] = useState(false)
    const [editarAdmines, setEditarAdmines] = useState(false)
    const [editables, setEditables] = useState({})

    const mostrarFormulario = async (nombre) => {
        if (mostrarFormSegun) {
            setEditarTiendas(true)
            setMostrarTiendas(true)
            console.log(nombre);

            try {
                const response = await axios.get(`http://172.20.10.3:5000/shop/shopsname/${nombre}`)
                console.log(response.data)
                setEditables(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        else {
            setEditarAdmines(true)
            setVerAdministradores(true)
            console.log(nombre);
        }
    }

    const elegirTabla = (thead) => {
        let url
        if (thead.hasOwnProperty("Provincia")) {
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
            console.log(datos);
            setCargando(false)
            console.log(datos);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let ruta = elegirTabla(thead);
        traerDatos(ruta)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            <section className='seccion-tabla'>
                {editarTiendas && <AdminFormTiendas editar={editables} />}
                {editarAdmines && <AdminFormAdministrador />}
                <div style={{ width: '100%', textAlign: "center", padding: '.3rem', fontWeight: 'bold' }}>{thead.hasOwnProperty("Provincia") ? "Tiendas:" : "Administradores:"}</div>
                <table className="tabla">
                    <thead>
                        <tr>
                            {datos.length > 0 && Object.keys(datos[0]).map((key, index) =>
                                <th key={index}>{key}</th>)}
                            <th className='opciones'>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.length > 0 && datos.map((dato, index) => (
                            <tr key={index}>
                                {Object.entries(dato).map(([atributo, valor], index) =>
                                    <td key={index}>{valor}</td>)}
                                <td className='opciones'>
                                    <button className="boton-ver"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" /></svg></button>
                                    <button className="boton-editar" onClick={() => mostrarFormulario(dato.Nombre)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z" /></svg></button>
                                    <button className="boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        )
    }
}
