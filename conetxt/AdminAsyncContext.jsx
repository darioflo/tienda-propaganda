import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { adminContext } from '@/conetxt/AdminContext'

export const asyncContext = createContext()

export default function AsyncContext({ children }) {

    const { contadorEnvios, setContadorEnvios } = useContext(adminContext)

    const [borrar, setBorrar] = useState(false)
    const [accionCompletada, setAccionCompletada] = useState(false)
    const [respuesta, setRespuesta] = useState('')
    const [wasError, setWasError] = useState(false)
    const [loader, setLoader] = useState(false)
    const [paraEditar, setParaEditar] = useState(false)
    const [paraEditarCategoria, setParaEditarCategoria] = useState(false)
    const [paraEditarMaterial, setParaEditarMaterial] = useState(false)
    const [mostrarTabla, setMostrarTabla] = useState(false)
    const [renderizarProductos, setRenderizarProductos] = useState(0)
    const [tiendaAdministrada, setTiendaAdministrada] = useState({})

    const borrarFila = async (dato) => {
        console.log(dato)
        setLoader(true)
        try {
            const response = await axios.delete(`https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/deleteshop/${dato}`)
            console.log(response.data);
            setContadorEnvios(contadorEnvios + 1)
            setBorrar(false)
            setLoader(false)
        } catch (error) {
            console.log(error);
        }
    }

    const data = {
        borrar,
        setBorrar,
        borrarFila,
        accionCompletada,
        setAccionCompletada,
        respuesta,
        setRespuesta,
        wasError,
        setWasError,
        loader,
        setLoader,
        paraEditar,
        setParaEditar,
        mostrarTabla,
        setMostrarTabla,
        renderizarProductos,
        setRenderizarProductos,
        paraEditarCategoria,
        setParaEditarCategoria,
        paraEditarMaterial,
        setParaEditarMaterial,
        tiendaAdministrada,
        setTiendaAdministrada
    }
    return <asyncContext.Provider value={data}>{children}</asyncContext.Provider>

} 