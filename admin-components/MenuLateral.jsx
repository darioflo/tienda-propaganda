'use client'
import "@/admin-components/admin-components-styles/MenuLateral.css"
import { adminContext } from "@/conetxt/AdminContext"
import { useContext } from "react"

export default function MenuLateral() {

    const {
        cambiarEstadoVerAdministradores,
        cambiarEstadoTiendas,
        cambiarEstadoInformacion,
        cambiarEstadoMaterial,
        cambiarEstadoCategoria,
        cambiarEstadoMostrarTiendas,
        cambiarEstadoProductos,
        cambiarEstadoProductosTienda,
        cambiarEstadoProductosMaterial,
        cambiarEstadoProductosCategoria } = useContext(adminContext)

    return (
        <aside className="menu-lateral">
            <details className="details-tienda">
                <summary>Tiendas</summary>
                <div onClick={cambiarEstadoTiendas}>Agregar una tienda</div>
                <div onClick={cambiarEstadoMaterial}>Agregar material</div>
                <div onClick={cambiarEstadoCategoria}>Agregar categoría</div>
                <div onClick={cambiarEstadoMostrarTiendas}>Ver tiendas disponibles</div>
            </details>
            <details className="details-products">
                <summary>Productos</summary>
                <div onClick={cambiarEstadoProductos}>Agregar producto</div>
                <div onClick={cambiarEstadoProductosTienda}>Ver productos por tienda</div>
                <div onClick={cambiarEstadoProductosCategoria}>Ver productos por categoria</div>
                <div onClick={cambiarEstadoProductosMaterial}>Ver productos por material</div>
            </details>
            <details className="details-admin">
                <summary>Administradores</summary>
                <div onClick={cambiarEstadoVerAdministradores}>Ver administradores</div>
            </details>
            <details className="details-web">
                <summary>Sitio Web</summary>
                <div onClick={cambiarEstadoInformacion}>Informacion</div>
            </details>
        </aside >
    )
}