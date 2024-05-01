import { createContext } from "react";
import { useState } from "react";

export const context = createContext()

export function HeaderProvider({ children }) {

    const [hamburguerMenuVisible, setHamburguerMenuVisible] = useState(false)

    const mostrarMenu = () => {
        setHamburguerMenuVisible(!hamburguerMenuVisible)
    }

    const [ubicacionMenuVisible, setUbicacionMenuVisible] = useState(false)

    const mostrarUbicacion = () => {
        setUbicacionMenuVisible(!ubicacionMenuVisible)
    }

    const [asideMenu, setAsideMenu] = useState(false)

    const showMenuAside = () => {
        setAsideMenu(!asideMenu)
    }

    const cerrarMenuPorFuera = () => {
        setAsideMenu(false)
        setUbicacionMenuVisible(false)
    }

    const [ubicacionName, setUbicacionName] = useState('')

    const data = {
        hamburguerMenuVisible,
        mostrarMenu,
        ubicacionMenuVisible,
        mostrarUbicacion,
        ubicacionName,
        setUbicacionName,
        asideMenu,
        showMenuAside,
        cerrarMenuPorFuera,
    }

    return <context.Provider value={data}>{children}</context.Provider>
}
