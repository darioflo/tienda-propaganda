'use client'
import ClientApp from "@/client-components/ClientApp"
import { useContext } from "react"
import { clientContext } from "@/conetxt/ClientContext"

export default function ClientPage() {

    const { idTienda } = useContext(clientContext)

    return (
        <ClientApp idTienda={idTienda} />
    )
}
