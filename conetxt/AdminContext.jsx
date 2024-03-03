import { createContext, useState } from "react";

export const adminContext = createContext()

export default function AdminContext({ children }) {

    const [administradores, setAdministradores] = useState(false) //estado cuya variable manejara el control del formulario de administradores
    const cambiarEstadoAdministradores = () => {
        setAdministradores(!administradores)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
    }

    const [verAdministradores, setVerAdministradores] = useState(false) //estado cuya variable manejara el control de la tabla VerAdministradores
    const cambiarEstadoVerAdministradores = () => {
        setVerAdministradores(!verAdministradores)
    }

    const [tiendas, setTiendas] = useState(false) //estado cuya variable manejara el control del formulario de tiendas
    const cambiarEstadoTiendas = () => {
        setTiendas(!tiendas)
        setAdministradores(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
    }

    const [verTiendas, setVerTiendas] = useState(false) //estado cuya variable manejara el control de la tabla VerTiendas
    const cambiarEstadoVerTiendas = () => {
        setVerTiendas(!verTiendas)
    }

    const [informacion, setInformacion] = useState(false) //estado cuya variable manejara el control del formulario de los servicios de la empresa
    const cambiarEstadoInformacion = () => {
        setInformacion(!informacion)
        setAdministradores(false)
        setTiendas(false)
        setMaterial(false)
        setCategoria(false)
    }

    const [material, setMaterial] = useState(false)
    const cambiarEstadoMaterial = () => {
        setMaterial(!material)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setCategoria(false)
    }

    const [categoria, setCategoria] = useState(false)
    const cambiarEstadoCategoria = () => {
        setCategoria(!categoria)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
    }

    const data = {
        administradores,
        cambiarEstadoAdministradores,
        verAdministradores,
        cambiarEstadoVerAdministradores,
        tiendas,
        cambiarEstadoTiendas,
        verTiendas,
        cambiarEstadoVerTiendas,
        informacion,
        cambiarEstadoInformacion,
        material,
        cambiarEstadoMaterial,
        categoria,
        cambiarEstadoCategoria
    }

    return <adminContext.Provider value={data}>{children}</adminContext.Provider>
}