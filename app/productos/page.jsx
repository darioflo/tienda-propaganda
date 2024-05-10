'use client'
import { useContext, useState, useEffect } from "react"
import { clientContext } from "@/conetxt/ClientContext"
import SingleProductView from "@/client-components/SingleProductView"
import axios from "axios"
import { ENDPIONTS } from "@/constants/constants"

export default function Productos() {

    const { idProducto } = useContext(clientContext)
    const [producto, setProducto] = useState('')

    useEffect(() => {
        const traerProducto = async () => {
            console.log("entro");
            try {
                let res = await axios.get(`${ENDPIONTS.obtener_producto}/${idProducto}`)
                console.log(res.data);
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
