'use client'
import "@/client-components/client-components-styles/HeaderBottom.css"
import { useContext } from 'react'
import { context } from "@/conetxt/HeaderContext"
import Link from 'next/link'


export default function HeaderBottom() {

    const { mostrarMenu } = useContext(context)

    return (
        <nav className="nav-bottom">
            <button className="hamburguer-menu" onClick={mostrarMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="rgb(224,224,224)" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg>
            </button>
            <ul className="links-ul">
                <li><Link href={'/productos'} style={{ 'color': "#FFF", 'textDecoration': "none" }}>Productos</Link></li>
                <li><Link href={'/'} style={{ 'color': "#FFF", 'textDecoration': "none" }}>Ayuda</Link></li>
                <li><Link href={'/'} style={{ 'color': "#FFF", 'textDecoration': "none" }}>Sobre Nosotros</Link></li>
                <li><Link href={'/'} style={{ 'color': "#FFF", 'textDecoration': "none" }}>Opiniones</Link></li>
                <li><Link href={'/'} style={{ 'color': "#FFF", 'textDecoration': "none" }}>Servicios</Link></li>
            </ul>
            <div className="redes-sociales">
                <div className="fcbk">
                    <Link href="https://www.facebook.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="rgb(224, 224, 224)" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" /></svg>
                    </Link>
                </div>
                <div className="ig">
                    <Link href="https://www.instagram.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="rgb(224, 224, 224)" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                    </Link>
                </div>
            </div>
        </nav>
    )
}