import '@/admin-components/admin-components-styles/Tabla.css'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useContext, useEffect, useState } from 'react';
import { adminContext } from '@/conetxt/AdminContext';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import axios from 'axios';
import { ENDPIONTS } from '@/constants/constants';
import AdminFormProductos from './AdminFormProductos';
import BorrarElementos from './BorrarElementos';
import AdminFormCategoria from './AdminFormCategoria';
import AdminFormMaterial from './AdminFormMaterial';
import AdminCard from './AdminCard';

export default function TablaPorFiltro({ datos, soloNombre, cargando, filtro }) {

    const columnas = soloNombre ? ['Nombre', 'Opciones'] : ['Nombre', 'Categoría', 'Material', 'Disponibilidad', 'Precio', 'Vendidos', 'Opciones'];
    const [editablesUnaTienda, setEditablesUnaTienda] = useState([])
    const [editablesCategoria, setEditablesCategoria] = useState([])
    const [editablesMaterial, setEditablesMaterial] = useState([])
    const [mostrarProducto, setMostrarProducto] = useState([])
    const [cardProducto, setCardProducto] = useState(false)
    const [mostrarEliminar, setMostrarEliminar] = useState(false)
    const [idEliminar, setIdEliminar] = useState('')
    const { paraEditar,
        setParaEditar,
        setRenderizarProductos,
        renderizarProductos,
        setLoader,
        paraEditarCategoria,
        setParaEditarCategoria,
        paraEditarMaterial,
        setParaEditarMaterial } = useContext(asyncContext)


    const obtenerUnProducto = async (id) => {
        setParaEditar(false)
        setCardProducto(true)

        try {
            let respuesta = await axios.get(`${ENDPIONTS.obtener_producto}/${id}`)
            setMostrarProducto(respuesta.data)
            console.log(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    }


    const seleccionarForm = async (id) => {
        setCardProducto(false)

        if (filtro === 'Productos') {
            try {
                let respuesta = await axios.get(`${ENDPIONTS.obtener_un_producto}/${id}`)
                console.log(respuesta.data);
                setEditablesUnaTienda(respuesta.data)
                setParaEditar(true)
            } catch (error) {
                console.log(error);
            }
        }
        else if (filtro === 'Categorias') {
            try {
                console.log(id);
                let respuesta = await axios.get(`${ENDPIONTS.obtener_una_categoria}/${id}`)
                console.log(respuesta.data);
                setEditablesCategoria(respuesta.data)
                setParaEditarCategoria(true)
            } catch (error) {
                console.log(error);
            }
        }
        else {
            try {
                console.log(id);
                let respuesta = await axios.get(`${ENDPIONTS.obtener_un_material}/${id}`)
                console.log(respuesta.data);
                setEditablesMaterial(respuesta.data)
                setParaEditarMaterial(true)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const datosParaEliminar = (id) => {
        setMostrarEliminar(true)
        setIdEliminar(id)
    }

    const borrarElementoFiltrado = async (id, filtro) => {
        setCardProducto(false)

        if (filtro === 'Productos') {
            try {
                setLoader(true)
                let respuesta = await axios.delete(`${ENDPIONTS.eliminarProducto}/${id}`)
                console.log(respuesta.data);
                setRenderizarProductos(renderizarProductos + 1)
                setMostrarEliminar(false)
            } catch (error) {
                console.log(error);
            }
        }
        else if (filtro === 'Categorias') {
            try {
                setLoader(true)
                let respuesta = await axios.delete(`${ENDPIONTS.eliminarCategoria}/${id}`)
                console.log(respuesta.data);
                setRenderizarProductos(renderizarProductos + 1)
                setMostrarEliminar(false)
            } catch (error) {
                console.log(error);
            }
        }
        else {
            try {
                setLoader(true)
                let respuesta = await axios.delete(`${ENDPIONTS.eliminarMaterial}/${id}`)
                console.log(respuesta.data);
                setRenderizarProductos(renderizarProductos + 1)
                setMostrarEliminar(false)

            } catch (error) {
                console.log(error);
            }
        }

        setLoader(false)
    }

    useEffect(() => {
        setEditablesUnaTienda([])
        setParaEditar(false)
        setEditablesCategoria([])
        setParaEditarCategoria(false)
        setEditablesMaterial([])
        setParaEditarMaterial(false)
        setMostrarProducto([])
        setCardProducto(false)
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
            <>
                {paraEditar && <AdminFormProductos editables={editablesUnaTienda} />}
                {paraEditarCategoria && <AdminFormCategoria editables={editablesCategoria} />}
                {paraEditarMaterial && <AdminFormMaterial editables={editablesMaterial} />}
                {cardProducto && <AdminCard element={mostrarProducto} />}
                {mostrarEliminar && <BorrarElementos setBorrar={setMostrarEliminar} borrarElemento={() => borrarElementoFiltrado(idEliminar, filtro)} />}
                <table className="tabla animate__animated animate__bounceInUp">
                    <thead>
                        <tr>
                            {columnas.map((columna, index) => <th key={index}>{columna}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((fila, index) => (
                            <tr key={index}>
                                {columnas.map((columna, index) => (
                                    <td key={index}>
                                        {columna === "Opciones" ? (
                                            <div className='opciones'>
                                                {filtro === 'Productos' ? <button className="boton-ver" onClick={() => obtenerUnProducto(fila.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" /></svg></button> : null}
                                                <button className="boton-editar" onClick={() => seleccionarForm(fila.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z" /></svg></button>
                                                <button className="boton-eliminar" onClick={() => datosParaEliminar(fila.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg></button>
                                            </div>
                                        ) : (
                                            typeof fila[columna] === 'object' ? fila[columna].name : fila[columna]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}