import "@/admin-components/admin-components-styles/AdminNavbar.css"

export default function AdminNavbar() {
    return (
        <nav className="admin-navbar">
            <div className="cerrar-sesion">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#505050" d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2" /><path fill="#505050" d="M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z" /></svg>
            </div>
        </nav>
    )
}