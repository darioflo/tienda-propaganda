import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { adminContext } from '@/conetxt/AdminContext'

export const asyncContext = createContext()

export default function AsyncContext({ children }) {

    const { contadorEnvios, setContadorEnvios } = useContext(adminContext)

    const [borrar, setBorrar] = useState(false)
    const borrarFila = async (dato) => {
        console.log(dato)
        try {
            const response = await axios.delete(`http://172.20.10.3:5000/shop/deleteshop/${dato}`)
            console.log(response.data);
            setContadorEnvios(contadorEnvios + 1)
            setBorrar(false)
        } catch (error) {
            console.log(error);
        }
    }

    const [accionCompletada, setAccionCompletada] = useState(false)
    const [respuesta, setRespuesta] = useState('')
    const [wasError, setWasError] = useState(false)

    const data = {
        borrar,
        setBorrar,
        borrarFila,
        accionCompletada,
        setAccionCompletada,
        respuesta,
        setRespuesta,
        wasError,
        setWasError
    }
    return <asyncContext.Provider value={data}>{children}</asyncContext.Provider>

} 