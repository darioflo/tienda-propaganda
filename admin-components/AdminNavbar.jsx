import "@/admin-components/admin-components-styles/AdminNavbar.css"
import Image from "next/image"
import logo from '@/public/LogoNegativo.png'
import { useContext } from "react"
import { adminContext } from "@/conetxt/AdminContext"
import Link from "next/link";
import { asyncContext } from "@/conetxt/AdminAsyncContext"

export default function AdminNavbar({ superadmin }) {

    const { setHamburgerMenu } = useContext(adminContext)
    const { tiendaAdministrada } = useContext(asyncContext)

    console.log(tiendaAdministrada);

    return (
        <nav className="admin-navbar">
            <div className="logo">
                <Image src={logo} alt="logo" priority />
            </div>
            <h3>{superadmin ? "Superadministrador" : `Administrador ${tiendaAdministrada.nombre ? tiendaAdministrada.nombre : ''}`}</h3>
            <div className="menu">
                <div className="hamburguer" onClick={() => setHamburgerMenu(true)}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="rgb(224,224,224)" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg></div>
                <div><Link href={'/'}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#ccc" d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2" /><path fill="#ccc" d="M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z" /></svg></Link></div>
            </div>
        </nav>
    )
}