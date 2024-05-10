import { createContext, useState } from "react";

export const clientContext = createContext()

export function ClientContextProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([])
    const [idProducto, setIdProducto] = useState('')
    const [hamburguerMenuVisible, setHamburguerMenuVisible] = useState(false)
    const [idTienda, setIdTienda] = useState('663812185ee653d1b23ec6dd')
    const [idTiendaAdmin, setIdTiendaAdmin] = useState('')
    const [estadoCliente, setEstadoCliente] = useState('')

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
        cartProducts,
        setCartProducts,
        idProducto,
        setIdProducto,
        hamburguerMenuVisible,
        mostrarMenu,
        ubicacionMenuVisible,
        mostrarUbicacion,
        ubicacionName,
        setUbicacionName,
        asideMenu,
        showMenuAside,
        cerrarMenuPorFuera,
        idTienda,
        setIdTienda,
        idTiendaAdmin,
        setIdTiendaAdmin,
        estadoCliente,
        setEstadoCliente
    }

    return <clientContext.Provider value={data}>{children}</clientContext.Provider>
}