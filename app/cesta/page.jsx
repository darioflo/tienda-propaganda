'use client'
import { PRODUCTOS_CESTA } from "@/constants/constants"
import { useState, useEffect } from "react";
import axios from "axios";
import CartProduct from "@/client-components/CartProduct";
import Link from "next/link";
import Image from "next/image";

export default function Cesta() {

    const [productos, setProductos] = useState([])

    const eliminarTodos = () => {
        setProductos([])
    }

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const responses = await Promise.all(PRODUCTOS_CESTA.map(id => axios.get(`https://fakestoreapi.com/products/${id}`)))
                const productosData = responses.map(response => response.data)
                setProductos(productosData)
                console.log(productosData);
            } catch (error) {
                console.error("Error fetching products", error)
            }
        }

        fetchProductos()
    }, [])

    return (
        <div className="page-cart-product">
            <nav className="nav-cart-products">
                <div className="logo-back-to-home-nav">
                    <Link href="/client"><Image className="logo-image-to-home" src="/logo.png" alt="" width={230} height={100} /></Link>
                </div>
                <button onClick={() => eliminarTodos()}>Eliminar todos</button>
            </nav>
            {productos.length === 0 ? "No hay productos en la cesta" : productos.map((producto, index) => <CartProduct element={producto} key={index} productos={productos} setProductos={setProductos} />)}
        </div>
    )
}