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
        setProductos(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
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
        setProductos(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
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
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
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
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
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
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
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
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
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
        setProductos(false)
        setProductosTienda(false)
        setProductosCategoria(false)
        setProductosMaterial(false)
    }

    const [productos, setProductos] = useState(false)
    const cambiarEstadoProductos = () => {
        setProductos(!productos)
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
    }

    const [productosTienda, setProductosTienda] = useState(false)
    const cambiarEstadoProductosTienda = () => {
        setProductosTienda(!productosTienda)
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
    }

    const [productosCategoria, setProductosCategoria] = useState(false)
    const cambiarEstadoProductosCategoria = () => {
        setProductosCategoria(!productosCategoria)
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
    }
    const [productosMaterial, setProductosMaterial] = useState(false)
    const cambiarEstadoProductosMaterial = () => {
        setProductosMaterial(!productosMaterial)
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
    }

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
        cambiarEstadoMaterial,
        categoria,
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
    }

    return <adminContext.Provider value={data}>{children}</adminContext.Provider>
}