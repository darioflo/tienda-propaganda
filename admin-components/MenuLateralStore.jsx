'use client'
import "@/admin-components/admin-components-styles/MenuLateral.css"
import { adminContext } from "@/conetxt/AdminContext"
import { useContext } from "react"

export default function MenuLateralStore() {

    const {
        cambiarEstadoInformacion,
        cambiarEstadoProductos,
        cambiarEstadoMaterial,
        cambiarEstadoCategoria,
        cambiarEstadoProductosTienda,
        cambiarEstadoProductosMaterial,
        cambiarEstadoProductosCategoria } = useContext(adminContext)

    return (
        <aside className="menu-lateral">
            <details className="details-products">
                <summary>Productos</summary>
                <div onClick={cambiarEstadoProductos}>Agregar producto</div>
                <div onClick={cambiarEstadoMaterial}>Agregar material</div>
                <div onClick={cambiarEstadoCategoria}>Agregar categoría</div>
                <div onClick={cambiarEstadoProductosTienda}>Ver productos</div>
                <div onClick={cambiarEstadoProductosCategoria}>Ver categorías</div>
                <div onClick={cambiarEstadoProductosMaterial}>Ver materiales</div>
            </details>
            <details className="details-web">
                <summary>Sitio Web</summary>
                <div onClick={cambiarEstadoInformacion}>Información</div>
            </details>
        </aside >
    )
}
