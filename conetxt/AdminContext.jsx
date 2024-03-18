import { createContext, useState } from "react";

export const adminContext = createContext()

export default function AdminContext({ children }) {

    const [administradores, setAdministradores] = useState(false) //estado cuya variable manejara el control del formulario de administradores
    const cambiarEstadoAdministradores = () => {
        setAdministradores(true)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarAdmines(false)
        setEditarTiendas(false)
    }

    const [verAdministradores, setVerAdministradores] = useState(false) //estado cuya variable manejara el control de la tabla VerAdministradores
    const cambiarEstadoVerAdministradores = () => {
        setVerAdministradores(true)
        setAdministradores(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setTiendas(false)
        setProductos(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setProductosTienda(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [tiendas, setTiendas] = useState(false) //estado cuya variable manejara el control del formulario de tiendas
    const cambiarEstadoTiendas = () => {
        setTiendas(true)
        setAdministradores(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [mostrarTiendas, setMostrarTiendas] = useState(false) //estado cuya variable manejara el control del formulario de tiendas
    const cambiarEstadoMostrarTiendas = () => {
        setMostrarTiendas(true)
        setAdministradores(false)
        setInformacion(false)
        setMaterial(false)
        setCategoria(false)
        setTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [informacion, setInformacion] = useState(false) //estado cuya variable manejara el control del formulario de los servicios de la empresa
    const cambiarEstadoInformacion = () => {
        setInformacion(true)
        setAdministradores(false)
        setTiendas(false)
        setMaterial(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [material, setMaterial] = useState(false)
    const cambiarEstadoMaterial = () => {
        setMaterial(true)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setCategoria(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [categoria, setCategoria] = useState(false)
    const cambiarEstadoCategoria = () => {
        setCategoria(true)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [productos, setProductos] = useState(false)
    const cambiarEstadoProductos = () => {
        setProductos(true)
        setCategoria(false)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [productosTienda, setProductosTienda] = useState(false)
    const cambiarEstadoProductosTienda = () => {
        setProductosTienda(true)
        setCategoria(false)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [productosCategoria, setProductosCategoria] = useState(false)
    const cambiarEstadoProductosCategoria = () => {
        setProductosCategoria(true)
        setCategoria(false)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosTienda(false)
        setProductosMaterial(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }
    const [productosMaterial, setProductosMaterial] = useState(false)
    const cambiarEstadoProductosMaterial = () => {
        setProductosMaterial(true)
        setCategoria(false)
        setAdministradores(false)
        setTiendas(false)
        setInformacion(false)
        setMaterial(false)
        setMostrarTiendas(false)
        setVerAdministradores(false)
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setEditarTiendas(false)
        setEditarAdmines(false)
    }

    const [contadorEnvios, setContadorEnvios] = useState(0)
    const [editarTiendas, setEditarTiendas] = useState(false)
    const [editarAdmines, setEditarAdmines] = useState(false)

    const data = {
        administradores,
        setAdministradores,
        cambiarEstadoAdministradores,
        verAdministradores,
        cambiarEstadoVerAdministradores,
        tiendas,
        setTiendas,
        cambiarEstadoTiendas,
        informacion,
        cambiarEstadoInformacion,
        material,
        setMaterial,
        cambiarEstadoMaterial,
        categoria,
        setCategoria,
        cambiarEstadoCategoria,
        mostrarTiendas,
        setMostrarTiendas,
        setVerAdministradores,
        cambiarEstadoMostrarTiendas,
        productos,
        cambiarEstadoProductos,
        productosTienda,
        cambiarEstadoProductosTienda,
        productosCategoria,
        cambiarEstadoProductosCategoria,
        productosMaterial,
        cambiarEstadoProductosMaterial,
        contadorEnvios,
        setContadorEnvios,
        editarTiendas,
        setEditarTiendas,
        editarAdmines,
        setEditarAdmines
    }

    return <adminContext.Provider value={data}>{children}</adminContext.Provider>
}