'use client'
import '@/client-components/client-components-styles/Footer.css'
import Image from "next/image";
import Link from 'next/link';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="logo-negative">
                    <h3>Contacto</h3>
                    <p>Dirección: Calle Ejemplo, 123</p>
                    <p>Teléfono: +34 123 456 789</p>
                    <p>Email: info@tuempresa.com</p>
                </div>
                <div className="datos-footer">
                    <h3>Nuestra Empresa</h3>
                    <p>Nombre: Tu Empresa</p>
                    <p>Industria: Tecnología</p>
                    <p>Fundada en: 2022</p>
                    <p>Misión: Proporcionar soluciones tecnológicas de alta calidad.</p>
                </div>
                <div className="redes">
                    <div className="enlace-redes"><Link href="https://facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg></Link></div>
                    <div className="enlace-redes"><Link href="https://messenger.com"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="white" d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76s-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459l-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" /></svg></Link></div>
                    <div className="enlace-redes"><Link href="https://twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg></Link></div>
                    <div className="enlace-redes"><Link href="https://instagram.com"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none"><path stroke="white" stroke-linejoin="round" stroke-width="4" d="M34 6H14a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8Z" /><path stroke="white" stroke-linejoin="round" stroke-width="4" d="M24 32a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" /><path fill="white" d="M35 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4" /></g></svg></Link></div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Propaganda y Eventos</p>
            </div>
        </footer>
    );
}

export default Footer;