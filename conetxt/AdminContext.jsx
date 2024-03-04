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
        setMostrarTiendas(false)
        setVerAdministradores(false)
    }

    const [verAdministradores, setVerAdministradores] = useState(false) //estado cuya variable manejara el control de la tabla VerAdministradores
    const cambiarEstadoVerAdministradores = () => {
        setVerAdministradores(!verAdministradores)
        setAdministradores(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setTiendas(false)
    }

    const [tiendas, setTiendas] = useState(false) //estado cuya variable manejara el control del formulario de tiendas
    const cambiarEstadoTiendas = () => {
        setTiendas(!tiendas)
        setAdministradores(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
    }

    const [mostrarTiendas, setMostrarTiendas] = useState(false) //estado cuya variable manejara el control del formulario de tiendas
    const cambiarEstadoMostrarTiendas = () => {
        setMostrarTiendas(!mostrarTiendas)
        setAdministradores(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
        setTiendas(false)
        setVerAdministradores(false)
    }

    const [informacion, setInformacion] = useState(false) //estado cuya variable manejara el control del formulario de los servicios de la empresa
    const cambiarEstadoInformacion = () => {
        setInformacion(!informacion)
        setAdministradores(false)
        setTiendas(false)
        setMaterial(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
    }

    const [material, setMaterial] = useState(false)
    const cambiarEstadoMaterial = () => {
        setMaterial(!material)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
    }

    const [categoria, setCategoria] = useState(false)
    const cambiarEstadoCategoria = () => {
        setCategoria(!categoria)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
    }

    const data = {
        administradores,
        cambiarEstadoAdministradores,
        verAdministradores,
        cambiarEstadoVerAdministradores,
        tiendas,
        cambiarEstadoTiendas,
        informacion,
        cambiarEstadoInformacion,
        material,
        cambiarEstadoMaterial,
        categoria,
        cambiarEstadoCategoria,
        mostrarTiendas,
        cambiarEstadoMostrarTiendas
    }

    return <adminContext.Provider value={data}>{children}</adminContext.Provider>
}