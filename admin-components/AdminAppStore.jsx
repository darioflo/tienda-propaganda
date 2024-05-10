'use client'
import "@/admin-components/admin-components-styles/AdminApp.css"
import AdminNavbar from "./AdminNavbar"
import AdminMain from './AdminMain'
import MenuLateralStore from "./MenuLateralStore"
import { useContext, useEffect, useState } from "react"
import { clientContext } from "@/conetxt/ClientContext"
import axios from "axios"
import { asyncContext } from "@/conetxt/AdminAsyncContext"
import AdminMainStore from "./AdminMainStore"

export default function AdminAppStore() {

    const { idTiendaAdmin } = useContext(clientContext)
    const { setTiendaAdministrada } = useContext(asyncContext)

    useEffect(() => {
        const traerTienda = async (id) => {
            try {
                let response = await axios.get(`https://0m9fgs4l-5000.usw3.devtunnels.ms/shop/shops/${id}`)
                console.log(response.data);
                setTiendaAdministrada({
                    nombre: response.data.name,
                    id: response.data._id
                })
            } catch (error) {
                console.log(error);
            }
        }

        traerTienda(idTiendaAdmin)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idTiendaAdmin])


    return (
        <section className="admin-app">
            <AdminNavbar superadmin={false} />
            <section className="main">
                <MenuLateralStore />
                <AdminMainStore />
            </section>
        </section>
    )
}
