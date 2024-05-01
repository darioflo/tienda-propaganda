import { createContext, useState } from "react";

export const clientContext = createContext()

export function ClientContextProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([])
    const [idProducto, setIdProducto] = useState('')


    const data = {
        cartProducts,
        setCartProducts,
        idProducto,
        setIdProducto
    }

    return <clientContext.Provider value={data}>{children}</clientContext.Provider>
}