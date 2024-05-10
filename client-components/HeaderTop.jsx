'use client'
import "@/client-components/client-components-styles/HeaderTop.css"
import { useContext } from 'react'
import { clientContext } from "@/conetxt/ClientContext"
import AsideMenu from './AsideMenu'
import Link from 'next/link'
import Image from "next/image";


export default function HeaderTop() {

    const { mostrarUbicacion, ubicacionName, asideMenu, showMenuAside } = useContext(clientContext)

    return (
        <nav className="navbar display">
            <div className="filtros-container display">
                <div className="logo-back-to-home-nav">
                    <Link href="/"><Image className="logo-image-to-home" src="/logo.png" alt="" width={230} height={100} /></Link>
                </div>
                {/*<button className="btn-filtros display" onClick={showMenuAside}>Buscar por
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                        <path fill="rgb(224, 224, 224)" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" /></svg>
                </button>*/}
            </div>
            {asideMenu && <AsideMenu />}
            <div className="buscador-container display">
                <div className="ubicacion display">
                    <button className="ubicacion-btn display" onClick={mostrarUbicacion}>{ubicacionName ? ubicacionName : "Ubicacion"}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                            <path fill="rgb(90, 90, 90)" d="M12 4c2.2 0 4 1.8 4 4c0 2.1-2.1 5.5-4 7.9c-1.9-2.5-4-5.8-4-7.9c0-2.2 1.8-4 4-4m0-2C8.7 2 6 4.7 6 8c0 4.5 6 11 6 11s6-6.6 6-11c0-3.3-2.7-6-6-6m0 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m8 13c0 2.2-3.6 4-8 4s-8-1.8-8-4c0-1.3 1.2-2.4 3.1-3.2l.6.9c-1 .5-1.7 1.1-1.7 1.8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5c0-.7-.7-1.3-1.8-1.8l.6-.9c2 .8 3.2 1.9 3.2 3.2" />
                        </svg>
                    </button>
                </div>
                <input className='buscador' type="search" placeholder="Buscar productos..." />
                <button className="btn-buscar display">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="rgb(90, 90, 90)" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5" /></svg>
                </button>
            </div>
            <div className="options display">
                <div className="entrar-registrar-container display">
                    <button className="entrar-registrar-btn display">
                        <Link href="/usuario" className='link-component'>Entrar
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="#fff" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                            </svg></Link>
                    </button>
                </div>
                <div className="cart-container display">
                    <button className="cart-btn display">
                        <Link href='/cesta' className='link-component'>Cesta
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="#fff" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
                            </svg>
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}