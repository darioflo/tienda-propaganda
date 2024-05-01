'use client'
import { useContext, useState, useEffect } from "react"
import { clientContext } from "@/conetxt/ClientContext"
import SingleProductView from "@/client-components/SingleProductView"
import axios from "axios"

export default function Productos() {

    const { idProducto } = useContext(clientContext)
    const [producto, setProducto] = useState('')

    useEffect(() => {
        const traerProducto = async () => {
            try {
                let res = await axios.get(`https://fakestoreapi.com/products/${idProducto}`)
                console.log(res);
                setProducto(res.data)
            } catch (error) {
                console.log(error);
            }
        }

        traerProducto()
    }, [idProducto])


    return (
        <>
            <SingleProductView element={producto} />
        </>
    )
}
