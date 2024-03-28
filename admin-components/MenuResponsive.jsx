import "@/admin-components/admin-components-styles/MenuResponsive.css"
import { useContext } from "react"
import { adminContext } from "@/conetxt/AdminContext"

function MenuResponsive() {

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
        cambiarEstadoProductosCategoria,
        hamburgerMenu,
        setHamburgerMenu } = useContext(adminContext)

    return (
        <div className={`opacity ${hamburgerMenu ? "animate__animated animate__bounceInRight" : null}`} onClick={() => setHamburgerMenu(false)}>
            <div className="menu-responsive">
                <div className="close-menu">
                    <button onClick={() => setHamburgerMenu(false)}><svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="rgb(120,120,120)" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg></button>
                </div>
                <div className="menu-section">
                    <h3>Tiendas</h3>
                    <div onClick={cambiarEstadoTiendas}>Agregar una tienda</div>
                    <div onClick={cambiarEstadoMaterial}>Agregar material</div>
                    <div onClick={cambiarEstadoCategoria}>Agregar categoría</div>
                    <div onClick={cambiarEstadoMostrarTiendas}>Ver tiendas disponibles</div>
                </div>
                <div className="menu-section">
                    <h3>Productos</h3>
                    <div onClick={cambiarEstadoProductos}>Agregar producto</div>
                    <div onClick={cambiarEstadoProductosTienda}>Ver productos por tienda</div>
                    <div onClick={cambiarEstadoProductosCategoria}>Ver productos por categoria</div>
                    <div onClick={cambiarEstadoProductosMaterial}>Ver productos por material</div>
                </div>
                <div className="menu-section">
                    <h3>Administradores</h3>
                    <div onClick={cambiarEstadoVerAdministradores}>Ver administradores</div>
                </div>
                <div className="menu-section">
                    <h3>Sitio Web</h3>
                    <div onClick={cambiarEstadoInformacion}>Informacion</div>
                </div>
            </div>
        </div>
    )
}

export default MenuResponsive