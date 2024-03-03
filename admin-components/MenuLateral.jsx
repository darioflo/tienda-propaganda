'use client'
import "@/admin-components/admin-components-styles/MenuLateral.css"
import { adminContext } from "@/conetxt/AdminContext"
import { useContext } from "react"

export default function MenuLateral() {

    const { cambiarEstadoAdministradores,
        cambiarEstadoVerAdministradores,
        cambiarEstadoTiendas,
        cambiarEstadoVerTiendas,
        cambiarEstadoInformacion,
        cambiarEstadoMaterial,
        cambiarEstadoCategoria } = useContext(adminContext)

    return (
        <aside className="menu-lateral">
            <details className="details-tienda">
                <summary>Tiendas</summary>
                <div onClick={cambiarEstadoTiendas}>Agregar una tienda</div>
                <div onClick={cambiarEstadoMaterial}>Agregar material</div>
                <div onClick={cambiarEstadoCategoria}>Agregar categoría</div>
                <div onClick={cambiarEstadoVerTiendas}>Ver tiendas disponibles</div>
            </details>
            <details className="details-admin">
                <summary>Administradores</summary>
                <div onClick={cambiarEstadoAdministradores}>Agregar un administrador</div>
                <div onClick={cambiarEstadoVerAdministradores}>Ver administradores</div>
            </details>
            <details className="details-web">
                <summary>Sitio Web</summary>
                <div onClick={cambiarEstadoInformacion}>Informacion</div>
            </details>
        </aside >
    )
}